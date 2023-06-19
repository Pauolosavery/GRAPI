import { useEffect, useState } from "react";
import style from "./styles.module.css";
import Persona from "../Persona/Persona";

import ChatList from "../ChatList/ChatList";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../ChatList/utils/debounce";
import { filteredData } from "../ChatList/utils/filteredData";
import { loadLastIncomingMessages } from "../../store/modules/chatListData/actions";
import { useCurrentUserId } from "../../context/current-user-context";
import { selectChatListData } from "../../store/modules/chatListData/selectors";
import { setCurrentChatIdAction } from "../../store/modules/chats/actions";
import { selectMessagelLoadingStatus } from "../../store/modules/chats/selector";
import NewChatIcon from "../2.Chat/NewChatIcon";
import SearchIcon from "./SearchIcon";

export default function NavBar() {

  const dispatch = useDispatch();
  const { currentUserId } = useCurrentUserId(); // возвращает текущего авторизованного пользователя
  
  let timerId = 0;

  const chatListData = useSelector(selectChatListData); // возвращает массив последних сообщений каждого активного чата
  const messagelLoadingStatus = useSelector(selectMessagelLoadingStatus);
  useEffect(()=>{   
    if (currentUserId?.idInstance){ 
      timerId = setInterval(()=>{
        dispatch(loadLastIncomingMessages())
      }, 15000);
      return ()=>{clearInterval(timerId)}
  }},[currentUserId])

  useEffect(()=>{   
    setFilteredUsers(chatListData);
  },[chatListData])

  useEffect(()=>{   
    if (currentUserId?.idInstance) dispatch(loadLastIncomingMessages())
  },[dispatch])

  const [filteredUsers, setFilteredUsers] = useState(chatListData);
  const [currentChatId, setCurrentChatId] = useState(0);

  const debounceCallback = (data, param) => {
    setCurrentChatId(param)
    setFilteredUsers(filteredData(data, param));
  };
  const debouncedHandler = debounce(debounceCallback, 300);
  
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      if (!currentChatId) {
        dispatch(setCurrentChatIdAction(null)); // устанавливаем пустой  чат
      } else {
        dispatch(setCurrentChatIdAction(currentChatId+'@c.us')); // set chatID
      }
    }
  };

  return (
    <div className={style.navBar}>
      {currentUserId ? 
      null 
      : 
      <Modal />
      }
      <div className={style.headerMenu}>
        <Persona />
        <div className={style.icon}>
        {/* <NewChatIcon/> */}
        </div>
      </div>
      <div className={style.newChatBlock}>
        <div className={style.searchWrapper}>
          <div className={style.search__icon}>
          <SearchIcon/>
          </div>
          <input
            id="input-label-id"
            className={style.input__control}//+' '+ style.tooltip}
            placeholder="Поиск или новый чат"
            onChange={(event) =>
              debouncedHandler(chatListData, event.target.value)
            }
            onKeyDown={handleKeyDown}
          />
          <div className={style.tooltip}>Введите номер телефона и нажмите Enter что-бы открыть новый чат</div>
        </div>
      </div>
      <ChatList filteredUser={filteredUsers}/>
    </div>
  );
}

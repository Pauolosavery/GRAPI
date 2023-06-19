import style from "./styles.module.css";
import Persona from "../Persona/Persona";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWeekDay } from "./utils";
import { setCurrentChatIdAction } from "../../store/modules/chats/actions";
import CheckMarkStatus from "./ChecmarkStatus";

export default function ChatList({ filteredUser }) {
  
  const dispatch = useDispatch();
  const [currentChatId, setCurrentChatId] = useState(null); // установливает значение текущего чата в правой части
  
  useEffect(()=>{
  },[currentChatId]);

  return (
    <div className={style.ChatList}>
      <ul className={style.ulNone}>
        {filteredUser[0] ? (filteredUser?.map((el, index) => {
          return (
            <li
            key={`${el?.chatId}`}
            onClick={() => {
                dispatch(setCurrentChatIdAction(el?.chatId))}}
            >
              <div className={style.persona}>
              <Persona userId={'el.chatId'} style={{'width': '49px', 'heigth': 'auto'}} />
              </div>
              <div className={style.ulChatInfo}>
                <div className={style.ulUserInfo}>
                  <span>{el?.chatId}</span>
                  <div className={style.ulTimeStamp}>
                    {`${new Date(el?.timestamp).getHours()}:${new Date(
                      el?.timestamp
                    ).getMinutes()}`}
                  </div>
                </div>
                <div className={style.ulTextMessage}>
                  <span><CheckMarkStatus/></span>
                  <p>{el?.textMessage}</p>
                </div>
              </div>
            </li>
          );
        })) : null}
      </ul>
    </div>
  );
}

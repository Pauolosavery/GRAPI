import * as React from 'react'
import style from "./styles.module.css";

import { handlerChange } from "../2.Chat/utils/handleChange";
import { useTextMessage } from '../2.Chat/hooks/useTextMessage';
import SendButton from '../2.Chat/SendButton'
import { useDispatch, useSelector } from 'react-redux';
import { sendTextStatus } from '../../store/modules/chats/actions';
import { useCurrentUserId } from '../../context/current-user-context';
import { selectCurrentChatId } from '../../store/modules/chats/selector';
  // Компонент отправляет в стор значение из инпута
export default React.memo(function Input() {

  const dispatch = useDispatch();
  const { currentUserId } = useCurrentUserId();
  const { chatId }  = useSelector(selectCurrentChatId);

  const inputRef = React.useRef();
  const { textMessage, setTextMessage } = useTextMessage();
  const sendTextMessage = () => {
    dispatch(sendTextStatus({textMessage, currentUserId, chatId}));  
    inputRef.current.value = ''
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      if (chatId) {
        sendTextMessage(); 
      } 
      return
    }
  };

  return (
  <div className={style.input__message__block}>
      <input type='text' id='messageInput' placeholder="Введите сообщение" ref={inputRef}
        onChange={(event) => handlerChange(event, setTextMessage)}
        onKeyDown={handleKeyDown}
      />
      {/* <textarea type='text' id='messageInput' placeholder="Введите сообщение" ref={inputRef}
        onChange={(event) => handlerChange(event, setTextMessage)}
      /> */}
      <div className={style.input__message__button}
        onClick={sendTextMessage}>
        <SendButton/>
      </div>
  </div>
  );
})

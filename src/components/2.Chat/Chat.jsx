import * as React from 'react';

import { useSelector } from "react-redux";

import style from "./styles.module.css";

import ProfileIcon from '../Persona/ProfileIcon';
import { selectChatIdHistoryMessage, selectCurrentChatId } from '../../store/modules/chats/selector';
import Input from '../Input/Input';

export default function Chat() {

  const { chatId }  = useSelector(selectCurrentChatId);
  let chatIdHistory  = useSelector(selectChatIdHistoryMessage);
  
  React.useEffect(()=>{
  },[chatId])

  return (
    <div className={style.Chat}>

      {chatId ? (
        <>
      <div className={style.chatHeader}>
        <div className={style.profileInfo}>
          <ProfileIcon />
        </div>
        <div className={style.chatIDinfo}>
          <div className={style.phoneNumber}>{chatId}</div>
          <div className={style.lastSeen}>Недавно</div>
        </div>
      </div>
        <div className={style.ChatPlug}>
            <div className={style.ChatID}>
              <ul>
                {chatIdHistory.map(message=> {
                  return (
                  <li key={message.idMessage}>
                    <div className={`${style.textMessageWrapper} \+ ${message.type === 'outgoing' ? [style.textMessage__out] : [style.textMessage__in]}`}>
                      <div className={`${style.textMessageBlock} \+ ${message.type === 'outgoing' ? [style.out] : [style.in]}`}>
                        <p>{message.textMessage}</p>
                        <div className={style.timestamp}>
                          {new Date(message?.timestamp).getHours()}:{new Date(message?.timestamp).getMinutes()}   
                          </div>
                      </div>
                    </div>
                  </li>)
                })}
              </ul>
            </div>
        </div>
        <Input/>  
      </>): (        
        <div className={style.logo}>  
      <img
            src="https://green-api.com/green-api-logo_2.png"
            alt="GREEN API"
      />
      </div>
      )}
    </div>
  );
}

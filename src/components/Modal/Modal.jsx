import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { useModal } from './hooks/useModal';
import { useInputData } from './hooks/useInputData';
import { handlerChange } from './utils/handleChange';
import { loadAuthorizationStatus } from '../../store/modules/modal/actions';
import { selectModalLoadingStatus } from '../../store/modules/modal/selectors';
import { useCurrentUserId } from '../../context/current-user-context';

export const Modal = () => {
  
  const dispatch = useDispatch();
  const sendAuthData = () => {
    dispatch(loadAuthorizationStatus(authData));  
  };

  const modalLoadingStatus = useSelector(selectModalLoadingStatus);
  const { setCurrentUserId } = useCurrentUserId();

  const { visibility, showModal, hideModal } = useModal();
  const { authData, setIdInstance, setToken } = useInputData();

  React.useEffect(()=>{
    if (modalLoadingStatus === 'success') {
      hideModal();
      setCurrentUserId(JSON.parse(localStorage.getItem('greenAPIclient')))
    }
  },[modalLoadingStatus]);

  
  return (
    <>
      {visibility ? (
        <div className='modal'>
          <div className='modal__wrapper'>
            <h3 className='modal__title'>Форма регистрации</h3>
            <div className='input__group'>
              <label htmlFor='input-label-id' className='input__label'>
                Ваш IdInstance
              </label>

              <input
                id='input-label-id'
                className='input__control'
                placeholder='Введите id'
                type="email" autoComplete="on"
                onChange={(event) => handlerChange(event, setIdInstance)}
              />

              <label htmlFor='input-label-token' className='input__label'>
                Ваш ApiTokenInstance
              </label>

              <input
                id='input-label-token'
                className='input__control'
                placeholder='Введите токен'
                type="tel" autoComplete="on"
                onChange={(event) => handlerChange(event, setToken)}
              />
            </div>
            <div className='button-group'>
              <button className='button button_primary' onClick={sendAuthData}>
                Отправить
              </button>
              <button className='button button_primary' onClick={hideModal}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

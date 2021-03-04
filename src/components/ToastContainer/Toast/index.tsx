import React, { useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

import infoIcon from '../../../assets/info_icon_blue.svg';
import successIcon from '../../../assets/success_icon_green.svg';
import errorIcon from '../../../assets/warning_icon_red.svg';
import dismissIcon from '../../../assets/close-black-icon.svg';

interface ToastProps {
  message: ToastMessage;
  style: Record<string, unknown>;
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const intl = useIntl();
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  const title = useMemo(() => {
    const titles = {
      info: intl.formatMessage({
        id: 'toast.info',
        defaultMessage: 'Info',
      }),
      error: intl.formatMessage({
        id: 'toast.error',
        defaultMessage: 'Error',
      }),
      success: intl.formatMessage({
        id: 'toast.success',
        defaultMessage: 'Success',
      }),
    };

    return titles[message.type ?? 'info'];
  }, [message.type, intl]);

  const icon = useMemo(() => {
    const icons = {
      info: (
        <img
          src={infoIcon}
          alt={intl.formatMessage({
            id: 'toast.info',
            defaultMessage: 'Info',
          })}
        />
      ),
      error: (
        <img
          src={errorIcon}
          alt={intl.formatMessage({
            id: 'toast.error',
            defaultMessage: 'Error',
          })}
        />
      ),
      success: (
        <img
          src={successIcon}
          alt={intl.formatMessage({
            id: 'toast.success',
            defaultMessage: 'Success',
          })}
        />
      ),
    };

    return icons[message.type ?? 'info'];
  }, [message.type, intl]);

  return (
    <Container type={message.type} style={style}>
      <span />

      {icon}

      <div>
        <strong>{title}</strong>
        <p>{message.description}</p>
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <img
          src={dismissIcon}
          alt={intl.formatMessage({
            id: 'toast.dismissToast',
            defaultMessage: 'Dismiss toast',
          })}
        />
      </button>
    </Container>
  );
};

export default Toast;

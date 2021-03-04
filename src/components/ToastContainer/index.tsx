import React from 'react';
import { useTransition } from 'react-spring';
import useMatchMedia from '../../hooks/matchMedia';
import { ToastMessage } from '../../hooks/toast';
import { device } from '../../styles/variables';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainer {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainer> = ({ messages }) => {
  const isTablet = useMatchMedia(device.tablet);
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    isTablet
      ? {
          from: { right: '-120%' },
          enter: { right: '0%' },
          leave: { right: '-120%' },
        }
      : {
          from: { top: '-120%' },
          enter: { top: '0%' },
          leave: { top: '-120%' },
        },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;

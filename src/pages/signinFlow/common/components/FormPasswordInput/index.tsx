import React, { useCallback, useState } from 'react';
import {
  FormPasswordInputContainer,
  FormPasswordInputStyled,
  ToggleVisibileButton,
} from './styles';

import openEyeIcon from '../../../../../assets/open-password-eye-icon.svg';
import closedEyeIcon from '../../../../../assets/closed-password-eye-icon.svg';

const FormPasswordInput: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeClick = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <FormPasswordInputContainer>
      <FormPasswordInputStyled type={showPassword ? 'text' : 'password'} />
      <ToggleVisibileButton onClick={handleEyeClick}>
        <img src={showPassword ? closedEyeIcon : openEyeIcon} alt="" />
      </ToggleVisibileButton>
    </FormPasswordInputContainer>
  );
};

export default FormPasswordInput;

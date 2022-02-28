import React from 'react';
import { useIntl } from 'react-intl';
import { FormContainer, FormHeader, FormBody } from './styles';

import logoImg from '../../../../assets/podcastic-signin-logo.svg';
import sloganImg from '../../../../assets/podcastic-signin-slogan.svg';

const SignInForm: React.FC = ({ children }) => {
  const intl = useIntl();

  return (
    <FormContainer>
      <FormHeader>
        <img src={logoImg} alt="Podcastic" />
        <img
          src={sloganImg}
          alt={intl.formatMessage({
            id: 'generic.slogan',
            defaultMessage: 'Your favorite podcasts, quick and easy.',
          })}
        />
      </FormHeader>

      <FormBody>{children}</FormBody>
    </FormContainer>
  );
};

export default SignInForm;

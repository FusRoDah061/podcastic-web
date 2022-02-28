import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FormContainer, FormHeader, FormBody } from './styles';

import logoImg from '../../../../../assets/podcastic-signin-logo.svg';

const SignInForm: React.FC = ({ children }) => {
  return (
    <FormContainer>
      <FormHeader>
        <Link to="/">
          <img src={logoImg} alt="Podcastic" />
        </Link>
        <h1>
          <FormattedMessage
            id="generic.slogan1"
            defaultMessage="Your favorite podcasts, "
          />{' '}
          <strong>
            <FormattedMessage id="generic.slogan2" defaultMessage="quick" />
          </strong>{' '}
          <FormattedMessage id="generic.slogan3" defaultMessage="and" />{' '}
          <strong>
            <FormattedMessage id="generic.slogan4" defaultMessage="easy." />
          </strong>
        </h1>
      </FormHeader>

      <FormBody>{children}</FormBody>
    </FormContainer>
  );
};

export default SignInForm;

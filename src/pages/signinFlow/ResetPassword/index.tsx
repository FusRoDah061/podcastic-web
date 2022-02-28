import React from 'react';
import { Variants } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import {
  BackgroundImage,
  Container,
  FormLabel,
  FormLink,
  FormSubmitButton,
  FormTitle,
} from '../common/signinStyles';
import SignInForm from '../common/components/SignInForm';
import FormPasswordInput from '../common/components/FormPasswordInput';

import backgroundImg from '../../../assets/pre-signin-background.svg';

const containerVariants: Variants = {
  initial: {
    y: '100vw',
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    y: '100vw',
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

const ResetPassword: React.FC = () => {
  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BackgroundImage src={backgroundImg} />

      <SignInForm>
        <FormTitle>
          <FormattedMessage
            id="resetPassword.title"
            defaultMessage="Create new password"
          />
        </FormTitle>

        <FormLabel>
          <FormattedMessage
            id="resetPassword.newPassword"
            defaultMessage="New password"
          />
        </FormLabel>

        <FormPasswordInput />

        <FormSubmitButton>
          <FormattedMessage id="generic.continue" defaultMessage="Continue" />
        </FormSubmitButton>

        <FormLink to="/signin">
          <FormattedMessage id="signin.title" defaultMessage="Sign in" />
        </FormLink>
      </SignInForm>
    </Container>
  );
};

export default ResetPassword;

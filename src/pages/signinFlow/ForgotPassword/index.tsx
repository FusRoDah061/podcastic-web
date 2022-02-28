import React from 'react';
import { Variants } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import {
  BackgroundImage,
  Container,
  FormLabel,
  FormLink,
  FormSubmitButton,
  FormTextInput,
  FormTextMuted,
  FormTitle,
} from '../common/signinStyles';
import SignInForm from '../common/components/SignInForm';

import backgroundImg from '../../../assets/pre-signin-background.svg';

const containerVariants: Variants = {
  initial: {
    x: '100vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '100vw',
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

const ForgotPassword: React.FC = () => {
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
            id="forgotPassword.title"
            defaultMessage="Recover password"
          />
        </FormTitle>

        <FormLabel>
          <FormattedMessage id="generic.email" defaultMessage="E-mail" />
        </FormLabel>

        <FormTextInput />

        <FormTextMuted>
          <FormattedMessage
            id="forgotPassword.instructions"
            defaultMessage="We will send instructions on recoverying your password to the e-mail address above."
          />
        </FormTextMuted>

        <FormSubmitButton>
          <FormattedMessage
            id="forgotPassword.continue"
            defaultMessage="Continue"
          />
        </FormSubmitButton>

        <FormLink to="#">
          <FormattedMessage id="signin.title" defaultMessage="Sign in" />
        </FormLink>
      </SignInForm>
    </Container>
  );
};

export default ForgotPassword;

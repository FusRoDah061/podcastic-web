import React from 'react';
import { Variants } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import {
  BackgroundImage,
  Container,
  FormLabel,
  FormLink,
  FormMutedLink,
  FormPasswordInput,
  FormSubmitButton,
  FormTextInput,
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

const SignIn: React.FC = () => {
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
          <FormattedMessage id="signin.title" defaultMessage="Sign-in" />
        </FormTitle>

        <FormLabel>
          <FormattedMessage id="signin.email" defaultMessage="E-mail" />
        </FormLabel>

        <FormTextInput />

        <FormLabel>
          <FormattedMessage id="signin.password" defaultMessage="Password" />
        </FormLabel>

        <FormPasswordInput />

        <FormMutedLink to="#">
          <FormattedMessage
            id="signin.forgotPasswordQuestion"
            defaultMessage="Forgot your password?"
          />
        </FormMutedLink>

        <FormSubmitButton>
          <FormattedMessage id="signin.signin" defaultMessage="Sign-in" />
        </FormSubmitButton>

        <FormLink to="#">
          <FormattedMessage
            id="signin.createAccount"
            defaultMessage="Create account"
          />
        </FormLink>
      </SignInForm>
    </Container>
  );
};

export default SignIn;

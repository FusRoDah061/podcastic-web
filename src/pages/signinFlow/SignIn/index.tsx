import React from 'react';
import { Variants } from 'framer-motion';
import { FormattedMessage } from 'react-intl';
import {
  BackgroundImage,
  Container,
  FormLabel,
  FormLink,
  FormMutedLink,
  FormSubmitButton,
  FormTextInput,
  FormTitle,
} from '../common/signinStyles';
import SignInForm from '../common/components/SignInForm';
import FormPasswordInput from '../common/components/FormPasswordInput';

import backgroundImg from '../../../assets/pre-signin-background.svg';

const containerVariants: Variants = {
  initial: {
    y: '-100vw',
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    y: '-100vw',
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
          <FormattedMessage id="generic.email" defaultMessage="E-mail" />
        </FormLabel>

        <FormTextInput />

        <FormLabel>
          <FormattedMessage id="generic.password" defaultMessage="Password" />
        </FormLabel>

        <FormPasswordInput />

        <FormMutedLink to="/forgot-password">
          <FormattedMessage
            id="signin.forgotPasswordQuestion"
            defaultMessage="Forgot your password?"
          />
        </FormMutedLink>

        <FormSubmitButton>
          <FormattedMessage id="signin.signin" defaultMessage="Sign-in" />
        </FormSubmitButton>

        <FormLink to="/signup">
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

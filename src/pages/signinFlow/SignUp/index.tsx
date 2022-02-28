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
  FormTitle,
} from '../common/signinStyles';
import SignInForm from '../common/components/SignInForm';
import FormPasswordInput from '../common/components/FormPasswordInput';

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

const SignUp: React.FC = () => {
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
          <FormattedMessage id="signup.title" defaultMessage="Sign-up" />
        </FormTitle>

        <FormLabel>
          <FormattedMessage id="signup.name" defaultMessage="Name" />
        </FormLabel>

        <FormTextInput />

        <FormLabel>
          <FormattedMessage id="generic.email" defaultMessage="E-mail" />
        </FormLabel>

        <FormTextInput />

        <FormLabel>
          <FormattedMessage id="generic.password" defaultMessage="Password" />
        </FormLabel>

        <FormPasswordInput />

        <FormSubmitButton>
          <FormattedMessage
            id="signup.createAccount"
            defaultMessage="Create account"
          />
        </FormSubmitButton>

        <FormLink to="#">
          <FormattedMessage
            id="signup.alreadyHaveAccount"
            defaultMessage="Already have an account"
          />
        </FormLink>
      </SignInForm>
    </Container>
  );
};

export default SignUp;

import * as React from 'react';
import { HeadingOne, Link } from '../generated-components';
import './login.scss';
import { LoginForm } from '../components';
import { usernameValidation, passwordValidation } from './validationRules';

type FormValues = {
  username: string;
  password: string;
};

export const Login = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = (isFormValid: boolean, formValues: FormValues) => {
    setIsLoading(true);
    if (isFormValid) {
      // do API call
      setTimeout(() => setIsLoading(false), 2000);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <HeadingOne>Log In</HeadingOne>
        <LoginForm
          isLoading={isLoading}
          onClick={handleClick}
          usernameValidation={usernameValidation}
          passwordValidation={passwordValidation}
          submitEnabledByDefault={false}
        ></LoginForm>
        <div className="link-container">
          <Link>Forgotten Password</Link>
          <Link>Sign Up!</Link>
        </div>
      </div>
    </div>
  );
};

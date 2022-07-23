import InputBox from 'components/InputBox';
import React from 'react';

interface SignInProps {
  goToSignUp: () => void;
}

function SignIn({ goToSignUp }: SignInProps) {
  return (
    <section>
      <InputBox name="e-mail" type="email" />
      <InputBox name="password" type="password" />
      <button onClick={goToSignUp}>to Sign Up</button>
    </section>
  );
}

export default SignIn;

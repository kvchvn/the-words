import InputBox from 'components/InputBox';
import React from 'react';

interface SignUpProps {
  goToSignIn: () => void;
}

function SignUp({ goToSignIn }: SignUpProps) {
  return (
    <section>
      <InputBox name="name" />
      <InputBox name="e-mail" type="email" />
      <InputBox name="password" type="password" />
      <button onClick={goToSignIn}>to Sign In</button>
    </section>
  );
}

export default SignUp;

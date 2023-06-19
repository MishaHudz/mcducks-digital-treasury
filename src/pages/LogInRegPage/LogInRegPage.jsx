import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, userLogin } from 'services/walletApi';

function LogInRegPage() {
  const [email, setEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const dispatch = useDispatch();

  const handleRegister = e => {
    e.preventDefault();
    console.log('Register');
    dispatch(register({ email, userPass }));
    setEmail('');
    setUserPass('');
  };

  const handleLogin = e => {
    e.preventDefault();
    console.log('login');
    dispatch(userLogin({ email, userPass }));
    setEmail('');
    setUserPass('');
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePass = e => {
    setUserPass(e.target.value);
  };
  return (
    <div
      style={{
        width: '392px',
        height: '554px',
        background: 'grey',
        borderRadius: '15px',
        padding: '20px',
      }}
    >
      <p>You can log in with your Google Account</p>
      <button>Google</button>
      <p>Or log in using an email and password, after registering:</p>
      <form>
        <input
          type="email"
          name="email"
          onChange={handleEmail}
          placeholder="your@email.com"
          required
          value={email}
        />
        <input
          type="password"
          name="password"
          onChange={handlePass}
          placeholder="********"
          required
          value={userPass}
        />
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleRegister}>Registration</button>
      </form>
    </div>
  );
}

export default LogInRegPage;

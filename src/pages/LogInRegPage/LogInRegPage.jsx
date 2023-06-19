import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, userLogin } from 'store/authOperation';

function LogInRegPage() {
  const [email, setEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [operation, setOperation] = useState(false);
  const dispatch = useDispatch();

  const resetForm = () => {
    setEmail('');
    setUserPass('');
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePass = e => {
    setUserPass(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (operation === 'login') {
      dispatch(userLogin({ email, userPass }));
      resetForm();
      return;
    }
    dispatch(register({ email, userPass }));
    resetForm();
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
      <button type="button">Google</button>
      <p>Or log in using an email and password, after registering:</p>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" onClick={() => setOperation('login')}>
          Log in
        </button>
        <button type="submit" onClick={() => setOperation('register')}>
          Registration
        </button>
      </form>
    </div>
  );
}

export default LogInRegPage;

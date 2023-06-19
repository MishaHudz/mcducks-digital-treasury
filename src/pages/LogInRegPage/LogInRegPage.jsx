function LogInRegPage() {
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
        <input type="email" name="email" placeholder="your@email.com" />
        <input type="password" name="password" placeholder="********" />
        <button>Log in</button>
        <button>Registration</button>
      </form>
    </div>
  );
}

export default LogInRegPage;

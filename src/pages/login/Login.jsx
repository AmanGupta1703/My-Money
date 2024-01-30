// styles
import { useState } from 'react';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('amangupta@gmail.com');
  const [password, setPassword] = useState('aman@123');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
  }

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className='btn'>Login</button>
    </form>
  );
}

export default Login;

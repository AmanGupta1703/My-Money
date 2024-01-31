import { useState } from 'react';

// styles
import styles from './Signup.module.css';

function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(displayName, email, password);
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>

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

      <label>
        <span>display name:</span>
        <input
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>

      <buttob className='btn'>Signup</buttob>
    </form>
  );
}

export default Signup;

import { useState } from 'react';

// custom hook
import { useSignup } from '../../hooks/useSignup';

// styles
import styles from './Signup.module.css';

function Signup() {
  const [displayName, setDisplayName] = useState('Aman');
  const [email, setEmail] = useState('amangupta@gmail.com');
  const [password, setPassword] = useState('aman@123');

  const { error, isPending, signup } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    signup(email, password, displayName);
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

      <button disabled={isPending} className='btn'>
        {isPending ? 'Loading...' : 'Signup'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Signup;

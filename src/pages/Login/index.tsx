import styles from './Login.module.css';
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Login() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('Login component mounted');

        return () => {
            console.log('Login component unmounted');
        }
    }, []);

    const handleLogin = () => {
        if(userId.trim() === '' || password.trim() === '') {
            alert('User ID and Password cannot be empty!');
            return;
        }
        
        if(userId !== 'Keen' || password !== '9527') {
            alert('Invalid User ID or Password!');
            return;
        }

        localStorage.setItem('userId', userId);
        localStorage.setItem('password', password);

        navigate('/');
    };

    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className={styles.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
                </a>
            </div>
            <h1>Welcome, your grace!</h1>
            <div className={styles.card}>
                <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} onKeyDown={handleKeyDown} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={handleLogin}>
                    Login
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={styles['read-the-docs']}>
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Login

import React, { useState } from 'react';
import "./login.css";
import reactLogo from '../../assets/react.svg';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login form submitted:', formData);
        if (!formData.email.trim() || !formData.password.trim()) {
            alert('Please fill in both email and password');
        }

        try {
            const response = fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email.trim(),
                    password: formData.password.trim(),
                }),
            });

            response.then(async res => {
                const data = await res.json();
                if (res.ok) {
                    alert('Login successful!');
                    console.log('Logged in user:', data.user);

                    navigate('/');
                } else {
                    alert(`Login failed: ${data.message}`);
                }
            });
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        } finally {
            setFormData({ email: '', password: '' });
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-logo">
                    <img src={reactLogo} alt="React Logo" />
                </div>
                <h2 className="login-title">
                    Log in to your account
                </h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-field">
                        <label htmlFor="email" className="field-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="field-input"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="field-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="field-input"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-btn">Log in</button>
                        <a href="#" className="register-link">Register a new account</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
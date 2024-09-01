// src/pages/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/auth/signup', { name, email, password });
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="container mx-auto mt-10 p-4 max-w-md">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl mb-4">Signup</h2>
                <input
                    type="text"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full"
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;

/* eslint-disable no-restricted-globals */
// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER);
    const [searchQuery, setSearchQuery] = useState("");
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const isToken = localStorage.getItem('token');

    // login
    const login = async (username, password) => {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: 'kminchelle',
                    password: '0lelplR',
                }),
            });

            if (!response.ok) {
                toast.error("Login failed");
                throw new Error('Login failed');
            }

            const data = await response.json();
            setToken(data.token);
            localStorage.setItem("token", data.token);
            toast.success("Login successful");
            // console.log('Login successful!');
        } catch (error) {
            console.error('Error during login:', error.message);
        } finally {
            setLoading(false);
        }
    };
    // logout
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        location.reload();
        toast.success("Logout successful");
    };
    // add to cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <AuthContext.Provider value={{ token, loading, login, logout, isToken, setLoading, searchQuery, setSearchQuery, minPrice, setMinPrice, maxPrice, setMaxPrice, addToCart, cart }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};


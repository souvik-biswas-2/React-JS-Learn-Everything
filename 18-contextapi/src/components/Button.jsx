import React, { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)

    const ChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={theme}>
            <button 
                onClick={ChangeTheme}
                className='m-5 px-6 py-2 bg-emerald-500 rounded-xl'
            >
                Change Theme
            </button>
        </div>
    );
};

export default Button;

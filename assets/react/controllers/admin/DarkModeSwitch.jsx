import React, {useState, useEffect} from 'react';

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const localTheme = localStorage.getItem('dark-mode');
        return localTheme ? JSON.parse(localTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
        if (isDarkMode) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
        </div>
    );
};

export default DarkModeSwitch;


 const detectDarkMode = () => {
    if (
        window.matchMedia && 
        window.matchMedia("(prefers-color-scheme: dark)").matches 
        ) {
        return 'dark'
    }
    return 'light'
};

export default detectDarkMode

/* Checking the dark theme at the user's system settings level */
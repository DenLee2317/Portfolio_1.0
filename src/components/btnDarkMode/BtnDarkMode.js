import { useEffect } from "react"
import { useLocalStorage } from "../../utils/useLocalStorage"
import detectDarkMode from "../../utils/detectDarkMode"

import "./style.css"
import sun from './sun.svg'
import moon from './moon.svg'



const BtnDarkMode = () => {
//    const [darkMode, setDarkMode] = useState('light');
    // const btnRef = useRef(null);
     const [darkMode, setDarkMode] = useLocalStorage ('darkMode', detectDarkMode ())

   /* topic activation and changing button state */
   useEffect (() => {
    if (darkMode === 'dark'){
        document.body.classList.add('dark');
        // btnRef.current.classList.add('dark-mode-btn--active');
    } else {
        document.body.classList.remove('dark');
        // btnRef.current.classList.remove('dark-mode-btn--active');
    }
   },[darkMode]);
   /*end of topic*/

   /* If the system settings are changed, change the theme */
        useEffect (() => {
         window
         .matchMedia("(prefers-color-scheme: dark)")
         .addEventListener("change", (event) => {
             const newColorScheme = event.matches ? "dark" : "light";
             setDarkMode(newColorScheme);
           
    });

   },[setDarkMode]);
   /* changes once because the empty array - end */

    /* component state */
    const toggleDarkMode = () => {
       setDarkMode ((currentValue) => {
         return currentValue === 'light' ? 'dark' : 'light'
       });
    }
   /* end of component */
const btnNormal ='dark-mode-btn';
const btnActive ='dark-mode-btn dark-mode-btn--active';

    return ( 
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>
    
     );
}
 
export default BtnDarkMode;
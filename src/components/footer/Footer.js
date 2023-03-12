import vk from "./../../img/icons/vk.svg"
import twitter from "./../../img/icons/twitter.svg"
import telegram from "./../../img/icons/telegram.svg"
import instagram from "./../../img/icons/instagram.svg"
import gitHub from "./../../img/icons/gitHub.svg"

const Footer = () => {
    return (  
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/DenLee2317"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://t.me/DenisYakovitskiy"><img src={telegram} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;
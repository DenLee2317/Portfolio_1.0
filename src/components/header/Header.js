
import './style.css'

const Header = () => {
    return (  
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em> Yakovitskiy Denis</em></strong><br/>
                Interested in the direction of frontend
            </h1>
            <div className="header__text">
                <p>CREATIVE | RESEARCHER | DEVELOPER</p>
            </div>
            <a href="https://denlee2317.github.io/My-CV/" className="btn_CV">View CV</a>
        </div>
    </header>
    );
}
 
export default Header;
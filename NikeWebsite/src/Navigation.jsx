import App from './App'
import "./Navigation.css"
const Navigation = () => {
    return (
        <div>
            
            <nav className='container'>
                <div className='logo'> 
                    <img src="./images/brand_logo.png" alt="logo" />
                </div>
                <div>
                    <ul>
                        <li href="#menu">Menu</li>
                        <li href="#location">Location</li>
                        <li href="#about">About</li>
                        <li href="#contacts">Contacts</li>
                    </ul>
                </div>
                <div>
                    <button >Login</button>
                </div>
            </nav>

        </div>
    );
}

export default Navigation;
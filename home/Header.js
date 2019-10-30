import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <img src = "./assets/unico.png" alt="unicorn horn">
                <h1>Our Horned Friends</h1>
            </header>
        `;
    }
}

export default Header;
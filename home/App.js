import Component from '../Component.js';
import ImageList from './ImageList.js';
import Header from '../home/Header.js';
import images from '../data/images.js';
import Footer from './Footer..js';
// import FilterImages from '../home/FilterImages.js';

class App extends Component {
    onRender(dom) {
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);

        const footer = new Footer;
        const footerDom = footer.renderDOM();
        dom.appendChild(footerDom);
        
    }

   

    renderHTML() {
        return /*html*/`
        <div>
            <main>
                <section class="options">
                </section>  
            <section class = "list-section">
                </section>
            </main>
        </div>
        `;
    }
}
export default App;
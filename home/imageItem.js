import Component from '../Component.js';

class ImageItem extends Component {

    renderHTML() {
        const image = this.props.image;

        return /*html*/`
            <li>
                <div class = "image-container">
                    <img src = "${image.url}" title = "${image.description}" />
                </div>
                <div class = "title-and-horns">
                    <p class = "title">${image.title}</p>
                    <p>Horns: ${image.horns}</p>
                </div>
            </li>
        `;
    }
}

export default ImageItem;
import Component from '../Component.js';

class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return /*html*/`
                    <select class="horn-filter">
                        <option value="" selected>All The Horns!</option>
                        <option value="narwhal">Narwhal</option>
                        <option value="rhino">Rhino</option>
                        <option value="unicorn">Unicorn</option>
                        <option value="unilego">Unilego</option>
                        <option value="triceratops">Triceratops</option>
                        <option value="markhor">Markhor</option>
                        <option value="mouflon">Mouflon</option>
                        <option value="addax">Addax</option>
                        <option value="chameleon">Chameleon</option>
                        <option value="lizard">Lizard</option>
                        <option value="dragon">Dragon</option>
                    </select> `;
    }
}

export default FilterImages;


// <section class="dropdown-block">
// <h2>Select the horned lovely you are seeking</h2>
// <section class="options">

//                 </section>
//             </section>
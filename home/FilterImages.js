import Component from '../Component.js';

class FilterImages extends Component {

    onRender(dom) {
        const onFilter = this.props.onFilter;
        const keywordSelect = dom.querySelector('.horn-filter');
        const numberSelect = dom.querySelector('.horn-number-filter');

        keywordSelect.addEventListener('input', () => {
            onFilter.keywordFilter(keywordSelect.value);
        });

        numberSelect.addEventListener('input', () => {
            onFilter.numberFilter(numberSelect.value);
        });
    }

    renderHTML() {
        return /*html*/`
                <section class="dropdown-block">
                    <h2>Select the horned lovely you are seeking</h2>
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
                    </select> 
                    <select class="horn-number-filter">
                        <option value="0" selected>All The Horns!</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </select> 
                </section>`;
    }       
}

export default FilterImages;

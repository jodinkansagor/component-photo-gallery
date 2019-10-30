// IMPORT MODULES under test here:
import ImageItem from '../home/imageItem.js';

const test = QUnit.test;

test('does this render the html from data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };
    
    const expected = /*html*/`
        <li>
            <div class = "image-container">
                <img src = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title = "A unicorn and a narwhal nuzzling their horns" />
            </div>
            <div class = "title-and-horns">
                <p class = "title">UniWhal</p>
                <p>Horns: 1</p>
            </div>
        </li>
    `;
    //Act 
    // Call the function you're testing and set the result to a const
    const props = { image: image };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();
    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(html, expected);
});

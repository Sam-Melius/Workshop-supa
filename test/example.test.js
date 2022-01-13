// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderParticipant } from '../render-utils.js';

const test = QUnit.test;




test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<p class="participant">sam : undefined</p>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant({ name: 'sam' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});

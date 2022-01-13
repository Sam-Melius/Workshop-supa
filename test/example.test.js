// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderParticipant } from '../render-utils.js';

const test = QUnit.test;

const participant = [
    { name: 'sam', contact: 'dude@dude.com' }
];

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = participant;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant(participant);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


/*  
 *  Nick Drishinski
 *   Software Developer
 *   Rockford Fosgate
*/

'use strict'

const city = 'Chicago'
// Don't rely on auto semi-colon insertion!
const address = {
    street: '45th Ave',
    number: '3442',
    city: 'Boston'
};

const commas = {
      method: 'get'
    , url: 'hello'
    , somethingElse: 'hi'
}

function newFunc() {
    console.log('proper semi-colon usage');
};

newFunc();
console.log(city);
import { add, square, sayA, sayB, timer } from './utils/index.js';

console.log(add(2, 2))
console.log(square(2, 2))


const alternator = (say, sayA, sayB) => {

    return () => {

        const results = say ? sayA() : sayB();

        say = !say;

        return results;
    }
}

const alt = alternator(true, sayA, sayB);

for (let i = 0; i < 10; i++) {
    
    console.log(alt());
}

timer()();

// const t = timer();

// console.log(t());

// const obj = {
// 	name: 'red',
//     getColor: function() {
    
//     	const redColor = () => {

//             return this;
//         }
        
//         return redColor;
//     }
// }

// console.dir(obj.getColor()() === obj) // this === obj
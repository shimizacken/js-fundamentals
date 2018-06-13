const add = (a, b) => a + b;

const square = a => a * a;

const sayA = () => 'A';
const sayB = () => 'B';

const timer = () => {

	let counter = 0;

	return () => {
    
        const t = setInterval(() => {

            if(counter === 10) {

                clearInterval(t);
            }

            console.log('timer called!', counter)

            counter++;

        }, 1500)
    }
}

export { add, square, sayA, sayB, timer };
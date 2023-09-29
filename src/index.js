import {choice, remove} from './helpers';
import fruit from './foods';

let randFruit = choice(fruit);

console.log(`I'd like one ${randFruit}, please`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious! May I have another?`);

let leftover = remove(fruit, randFruit);

console.log(`I'm sorry, we're all out. We have ${leftover.length} left.`);
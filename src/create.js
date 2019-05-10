import { displayLog } from './utils';
import { from } from 'rxjs';

export default () => {
    /** start coding */

    const myArray = [1,2,3,4,5];

    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve('Hello World');
    }, 2000));

    const observable = from(myPromise);

    const subscription = observable.subscribe(e => displayLog(e));
    /** end coding */
}
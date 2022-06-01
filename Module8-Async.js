/**
 * 1.- Write your own Promise class with syncThen method.
 * Example:
 */

class MyPromise extends Promise {   // extends explicit class from Promise
    // when we make an extend from other class, the extender class
    // takes all the methods from the extended class, here we add
    // the method that is required for the task, in this case 'syncThen'
    async synchThen(funct) { //funct is an auxiliar variable for the callback function
        return this.then(() => funct());
        // this point could be confusing but the idea is the next:
        // syncThen get the callback function, every Promise should
        // have a 'then' method to solve what is the behavior of the resulting data/objects,
        // so here we return the 'then' of the same Promise class.
        // After that we take the callback function from the argument and return
        // it with the arrow function.
    }
}

let promise = new MyPromise((resolve)=> {
        console.log(1);
        resolve(); 
    }).synchThen(() => { 
        console.log(2); 
    }).then(() => { 
        console.log(3); 
    });

console.log(4); //1,2,4,3

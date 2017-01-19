'use strict';

class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore.slice(-1)[0];
    }

    empty() {
        return this.dataStore.length === 0;
    }
    count(){
        return this.dataStore.length;
    }

    toString() {
        var response = "";
        this.dataStore.forEach((item) => {
            response += item + '\n';
        });
        return response;
    }
}

module.exports = {
    Queue
};
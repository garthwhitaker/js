'use strict';

class PriorityQueue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue(element) {
        var priority = this.dataStore[0].code;
        for (var i = 1; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].code < priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
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
    count() {
        return this.dataStore.length;
    }

    toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i].name + " code: "
                + this.dataStore[i].code + "\n";
        }
        return retStr;
    }
}

module.exports = {
    PriorityQueue
};
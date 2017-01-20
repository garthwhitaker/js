'use strict';

class Dictionary {
    constructor() {
        this.dataStore = [];
    }

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key];
    }

    remove(key) {
        delete this.dataStore[key];
    }

    showAll() {
        Object.keys(this.dataStore).sort().forEach((key) => {
            console.log(`${key} -> ${this.dataStore[key]}`);
        });
    }

    count() {

        var n = 0;

        Object.keys(this.dataStore).forEach((key) => {
            n++;
        });

        return n;
    }

    clear() {
        Object.keys(this.dataStore).forEach((key) => {
            this.remove(key);
        });

    }

    
}

module.exports = {
    Dictionary
}
'use strict';

const {Node} = require('./node');

class LinkedList {
    constructor() {
        this.head = new Node("head");
    }
    find(item) {
        var currentNode = this.head;

        while (currentNode != null && currentNode.element != item) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);

        newNode.next = current.next;
        current.next = newNode;
    }
    findPrevious(item) {
        var currentNode = this.head;

        while (currentNode != null && currentNode.next.element != item) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
    remove(item) {
        var previous = this.findPrevious(item);

        if (previous != null) {
            previous.next = previous.next.next;
        }

    }

    show() {
        var currNode = this.head;
        console.log(currNode);
    }

    advance(n) {
        var currentNode = this.head;
        while (n > 0) {
            currentNode = currentNode.next;
            n--;
        }
        return currNode;
    }

    display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
}

module.exports =
    {
        LinkedList
    };
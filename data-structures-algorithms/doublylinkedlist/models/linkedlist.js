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
        newNode.previous = current;
        current.next = newNode;

    }
    findLast() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    remove(item) {
        var currNode = this.find(item);
        if (!(currNode.next == null)) {

            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }

    display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    displayReverse() {
        var lastNode = this.findLast();
        while (!(lastNode.previous == null)) {
            console.log(lastNode.element);
            lastNode = lastNode.previous;
        }
    }
}

module.exports =
    {
        LinkedList
    };
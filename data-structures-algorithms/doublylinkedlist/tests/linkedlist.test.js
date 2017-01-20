'use strict';

var expect = require('expect');

var {LinkedList} = require('./../models/linkedlist');

describe('Linked list', () => {

    var linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it('should not find item as list is empty', () => {
        var node = linkedList.find("item");

        expect(node).toBe(null);
    });

    it('should find item in list', () => {
        linkedList.insert("Garth", "head");
        var node = linkedList.find("Garth");

        expect(node.element).toBe("Garth");
        expect(node.next).toNotExist();
    });

    it('should find previous item in list', () => {

        linkedList.insert("Garth", "head");
        linkedList.insert("Terry", "Garth");

        var node = linkedList.findPrevious("Terry");

       expect(node.element).toBe("Garth");
       expect(node.next.element).toBe("Terry");
    });

    it('should remove item and not find in list', () => {

        linkedList.insert("Garth", "head");
        linkedList.insert("Terry", "Garth");
        linkedList.remove("Terry");

        var node = linkedList.find("Terry");

        expect(node).toNotExist();
    });

})
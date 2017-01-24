'use strict';

const expect = require('expect');

const {Stack} = require('./../model/stack');

describe('Stack', () => {
    var stack;
    
    beforeEach(()=>{
        stack = new Stack();
        stack.push("Garth");
    });

    it('should add an element onto stack', () => {
        stack.push("Chanel");
        expect(stack.length()).toEqual(2);
    });
    it('should pop element from stack', () => {
        stack.push("Chanel");
        stack.pop();
        expect(stack.length()).toEqual(1);
        expect(stack.peek()).toBe("Garth");
    });
    it('should find a element on top stack', () => {
        expect(stack.peek()).toBe("Garth");
    });
    it('should return length of stack', () => {
        expect(stack.length()).toEqual(1);
    });
    it('should clear stack', () => {
        stack.clear();
        expect(stack.length()).toEqual(0);
    });
})
'use strict';

const expect = require('expect');
const {Queue} = require('./../model/queue');

describe('Queue', () => {
    var queue;

    beforeEach(() => {
        queue = new Queue();
        queue.enqueue('Garth');
    });
    
    it('should enqueue a element onto queue', () => {
        queue.enqueue('Garth');
        expect(queue.count()).toEqual(2);
    });

    it('should dequeue a element from queue', () => {
        queue.dequeue();
        expect(queue.count()).toEqual(0);
    });

    it('should find element in front of queue', () => {

        queue.enqueue('Chanel');
        var item = queue.front();

        expect(item).toBe('Garth');
    });

    it('should find element at back of queue', () => {
        queue.enqueue('Chanel');
        var item = queue.back();

        expect(item).toBe('Chanel');
    });

    it('should return empty if queue is empty', () => {
        expect(queue.empty()).toBeFalsy();
        queue.dequeue();
        expect(queue.empty()).toBeTruthy();
    });

    it('should return count of items in queue', () => {
        expect(queue.count()).toEqual(1);
    });

})
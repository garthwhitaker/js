'use strict';

const expect = require('expect');
const {Dictionary} = require("./../model/Dictionary");

describe('Dictionary', () => {
    var dictionary;

    beforeEach(() => {
        dictionary = new Dictionary();
        dictionary.add('Garth', '44444222');
    });

    it('it should add key and value to dictionary', () => {
        dictionary.add('Chanel', '1123123123213');
        expect(dictionary.find('Chanel')).toBe('1123123123213');
        expect(dictionary.count()).toEqual(2);
    });
    it('it should find key value in dictionary', () => {
        expect(dictionary.find('Garth')).toBe('44444222');
    });
    it('it should remove key and value from dictionary', () => {
        dictionary.remove('Garth');
        expect(dictionary.count()).toEqual(0);
        expect(dictionary.find('Garth')).toNotExist();
    });

    it('it should clear dictionary', () => {
        dictionary.clear();
        expect(dictionary.count()).toBe(0);
    });
    it('it should return count of items in  dictionary', () => {
        expect(dictionary.count()).toEqual(1);
    });
})
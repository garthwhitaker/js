'use strict';

const {Dictionary} = require('./model/dictionary');

var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");

pbook.showAll();
console.log(pbook.count());
pbook.clear();
console.log(pbook.count());


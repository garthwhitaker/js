'use strict';

const {LinkedList} = require('./models/linkedlist');


var cities = new LinkedList();

cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");

cities.display();
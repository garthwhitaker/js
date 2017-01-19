const {Queue} = require('./model/queue');
const {PriorityQueue} = require('./model/priority-queue');
const {Dancer} = require('./model/dancer');
const {Patient}= require('./model/patient');


var maleDancers = new Queue();
var femaleDancers = new Queue();

Dancer.getDancers(maleDancers, femaleDancers);
Dancer.dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
    console.log(`There are ${femaleDancers.count()} females waiting to dance.`);
}
if (!maleDancers.empty()) {
    console.log(`There are ${maleDancers.count()} females waiting to dance.`);
}

var p = new Patient("Smith",5);
var ed = new PriorityQueue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
// another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
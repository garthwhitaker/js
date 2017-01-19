
'use strict';

const fs = require('fs');

class Dancer {

    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    static getDancers(male, female) {

        var dancers = fs.readFileSync('./data/dancers.txt')
                        .toString()
                        .split('\n');

        dancers = dancers.map((dancer) => {
            return dancer.trim();
        });

        dancers.forEach((dancer) => {

            var item = dancer.split(" ");
            var sex = item[0];
            var name = item[1];
            if (sex === 'F') {
                female.enqueue(new Dancer(name, sex));
            }
            else {
                male.enqueue(new Dancer(name, sex));
            }

        });
    }

    static dance(males, females) {
        
        while (!males.empty() && !females.empty()) {
            
            var female = females.dequeue();
            console.log(female.name + ' is ready to dance.');
            var male = males.dequeue();
            console.log(male.name + ' is ready to dance.');
        }
    }
}

module.exports = {
    Dancer
}


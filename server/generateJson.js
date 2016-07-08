'use strict';

const faker = require('faker');
const fs = require('fs');
const path = require('path');

const departments = ['HR', 'e-commerse', 'development', 'entertainment', 'unknown'];


let staffCount = 4000;
let staff = [];


while (staffCount > 0) {
    let person = {
        id: faker.random.number(),
        name: faker.fake('{{name.firstName}} {{name.lastName}} '),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        department: departments[Math.floor(Math.random()*departments.length)],
        avatar: faker.image.avatar(),
    };

    staff.push(person);
    staffCount--;
}

fs.writeFile('./server/data.json', JSON.stringify(staff), {
        encoding: 'utf8'}, err => console.err);


import Faker from 'faker';
import {PROJECT, FOLDER, FILE, EXTENTION_JAVA, EXTENTOION_JAVASCRIPT} from '../constants';

const types = [FOLDER, FILE];
const extentionTypes = [EXTENTION_JAVA, EXTENTOION_JAVASCRIPT];

function contributors() {
    const contributors = [];

    for(let i = 0; i < Faker.random.number({min: 1, max: 5}); i++) {
        contributors.push([Faker.name.lastName(), Faker.name.firstName()].join('.'));
    }

    return contributors;
}

function project() {
    return {
        id: Faker.random.uuid(),
        name: Faker.random.word(),
        description: Faker.random.words(Faker.random.number({min: 15, max: 25})),
        contributors: contributors(),
        createTime: Faker.date.recent(200),
        type: PROJECT
    };
}

function projectList() {
    let arr = [];

    for(let i = 0; i < Faker.random.number({min: 2, max: 5}); i++) {
        arr.push(project());
    }

    return arr;
}

function folderList(count = Faker.random.number({min: 10, max: 15})) {
    const arr = [];

    for(let i =0; i < count; i++){
        let o = {
            type: types[parseInt(Math.random() * 100 % types.length)],
            modifiedBy: [Faker.name.lastName(), Faker.name.firstName()].join('.'),
            modifiedTime: Faker.date.recent(200)
        }

        if(o.type === FOLDER) {
            o.name = Faker.random.word()
        } else {
            o.name = Faker.random.word() + '.' + extentionTypes[parseInt(Math.random() * 100 % extentionTypes.length)]
        }

        arr.push(o);
    }

    return arr.sort(function(a, b) {
        return a.type < b.type
    });
}

export default {
    project,
    projectList,
    folderList
}

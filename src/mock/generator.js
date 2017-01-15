import Faker from 'faker';
import {PROJECT, FOLDER, FILE, EXTENTION_JAVA, EXTENTOION_JAVASCRIPT} from '../constants';

const types = [FOLDER, FILE];
const extentionTypes = [EXTENTION_JAVA, EXTENTOION_JAVASCRIPT];

console.log(Faker);

function project() {
    return {
        id: Faker.random.uuid(),
        name: Faker.random.words(2),
        description: Faker.random.words(20),
        contributors: [1, 2, 3, 4, 5].map(() => [Faker.name.lastName(), Faker.name.firstName()].join('.')),
        createTime: Faker.date.past(2016),
        type: PROJECT
    };
}

function projectList(count = 5) {
    let arr = [];

    for(let i = 0; i < count; i++) {
        arr.push(project());
    }

    return arr;
}

function folderList(count = Faker.random.number({min: 15, max: 20})) {
    const arr = [];

    for(let i =0; i < count; i++){
        let o = {
            type: types[parseInt(Math.random() * 100 % types.length)],
            modifiedBy: Faker.name.lastName(),
            modifiedTime: Faker.date.past(2016)
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
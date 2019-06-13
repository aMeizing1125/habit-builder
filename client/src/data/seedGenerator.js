console.log("inside seed generator");

objectTemplate = {
    name: "name",
    age: "age",
    color: "blue"
}


class Seed {
    constructor(template){
        const templateKeys = Object.keys(template);
        // Iterating through each of the object's keys
        for(let i = 0; i < templateKeys.length; i++){
            const key = templateKeys[i];
            console.log(key);
        }
    }
}

const seedObject = new Seed(objectTemplate);

console.log(seedObject);
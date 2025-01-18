var obj = {
    name: "gao fei",
    age: 37,
    job: "SE"
}

const { name, age, job } = obj;
console.log(name, age, job);

const { log } = console;
const { abs, floor } = Math;
log("abs(-5) = " + abs(-5));
log("floor(3.1415) = " + floor(3.1415));
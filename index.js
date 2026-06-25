//import { add, divide, minus, multiply } from "./math.js";
//const a = 15645;
//const b = 9;
//import * as Math from "./math.js";

//console.log(`${a} + ${b} = ${Math.add(a, b)}`);
//console.log(`${a} - ${b} = ${Math.minus(a, b)}`);
//console.log(`${a} * ${b} = ${Math.multiply(a, b)}`);
//console.log(`${a} / ${b} = ${Math.divide(a, b)}`);
//console.log(`${a} % ${b} = ${Math.modulo(a, b)}`);

import "dotenv/config";

const port = process.env.PORT;
const name = process.env.NAME; // แก้ไขตรงนี้จาก port เป็น name

console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);
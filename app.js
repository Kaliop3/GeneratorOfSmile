const fs = require("fs");
const subject = fs.readFileSync(__dirname + "/subject.txt").toString().split(",");
const verb = fs.readFileSync(__dirname + "/verb.txt").toString().split(",");
const nounLast = fs.readFileSync(__dirname + "/nounLast.txt").toString().split(",");
let s = Math.floor(Math.random() * subject.length);
let sub = subject[s];
let v = Math.floor(Math.random() * verb.length);
let ver = verb[v];
let n = Math.floor(Math.random() * nounLast.length);
let noun = nounLast[n];
if (sub[sub.length - 1] == "a") {
    ver += "a";
}
console.log(sub, ver, noun);
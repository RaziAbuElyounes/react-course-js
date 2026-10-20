import{students} from "./data.js";
import withStatus from "./report.js";
let arr = withStatus(students);
for(let i = 0; i < arr.length; i++)
    console.log(`${arr[i].name} : ${arr[i].status}`);
console.log(arr[3]?.status);
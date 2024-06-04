let job = {
  "employee Id" : "3",
  "name" : "Abel",
  "jobTitle" : "Web Developer",
  "payRate" : "121.45"
}

let filter = ["name", "payRate"];
let str = JSON.stringify(job, filter);
console.log(str);
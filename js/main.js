
// for(let count =1; count<=5; count++){
//     console.log("first page");
// }

// let sum =0;
// for (let i=1; i<=5; i++){
//     sum = sum +i;
// }
// console.log("sum =" ,sum);

workflow.makeSuccess=false
const leadData = {
  userIntent:workflow.userIntent ,
  userTimeFram:workflow.userTimeFram ,
  name: workflow.userName,
  email : workflow.userEmail
}
try {
  const response = await axios ('', leadData);
  workflow.makeSuccess = true ;
}
catch (error){
  console.error(error);
}
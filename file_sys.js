const fs=require("fs");
const path=require("path");
const dirpath=path.join(__dirname,"files2");
console.log(dirpath)

for (i=0;i<=5,i++;){
    // console.log(i);
    fs.writeFileSync(dirpath+"fill"+i+".txt","simple")
}
// console.log("priya")



// for (i=1;i<5;i++){
//     console.log(i)
// }
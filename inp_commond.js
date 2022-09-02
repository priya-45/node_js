// console.log(process.argv[2])

// const fs=require("fs")

// const input=process.argv;
// fs.writeFileSync(input[2],input[3])




const fs=require("fs")

const input=process.argv;
if (input[2]=="add"){
    fs.writeFileSync(input[3],input[4])   //node inp_commond.js add comm.txt "this is a color and fruits"
}                                               //if you want to add file use command line add
else if (input[2]=="remove"){              //node inp_commond.js remove comm.txt "this is a color and fruits"
    fs.unlinkSync(input[3])                 //if you want to delete file that time you can use remove
}
else{
    console.log("invalid input")
}
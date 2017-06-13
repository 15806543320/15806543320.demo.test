const fs=require("fs");
const path=require("path");

fs.readFile(path.join(__dirname,"./1.txt"),"utf8",(error,data)=>{
	if(error){
		throw error;
	}
	console.log(data);
})
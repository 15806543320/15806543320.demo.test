const fs=require("fs");
const path=require("path");

fs.readFile(path.join(__dirname,"./1.txt"),"utf8",(error,data)=>{
	if(error){
		throw error;
	}
	// 倘若不加第二个参数，那么回调里面的第二个参数返回的是一个buffer对象
	console.log(data);
})
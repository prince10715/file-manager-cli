const fs= require("fs");

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];
const newFileName = process.argv[5];
if(command == "create"){
    fs.writeFile(fileName," ",(error)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("file created successfully");
    })
}
if(command == "read"){
    fs.readFile(fileName,"utf8",(error,data)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log(data);
    })
}

if(command== "update"){
     if(!content){
            console.log("please provide content to update the file");
            return;
        }
    fs.appendFile(fileName,content,(error)=>{
       
        if(error){
            console.log(error);
            return;
        }
        console.log("file updated successfully");
    })
}

if(command == "delete"){
    if(!fileName){
        console.log("please provide file name to delete the file");
        return;
    }
    fs.unlink(fileName,(error)=>{
      if(error){
        console.log(error);
        return;
      }
        console.log("file deleted successfully");
    })
}
if(command=="list"){
    fs.readdir("./",(error,files)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("list of the file in the current directory");
        files.forEach(file=>{
            console.log(file);
;        })
    })
}
if(command=="rename"){
    if(!fileName || !newFileName){
        console.log("please provide file name and new file name to rename the file");
        return;
    }
    fs.rename(fileName,newFileName,(error)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("file renamed successfully!");
    })
}

if(command=="info"){
    if(!fileName){
        console.log("please provide file name to get the file info");
        return;
    }
    fs.stat(fileName,(error,stats)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log(`file name: ${fileName}`);
        console.log(`file size: ${stats.size} bytes`);
        console.log(`file created at: ${stats.birthtime}`);
        console.log(`file modified at: ${stats.mtime}`);

    })
}
if (command=="mkdir"){
    if(!fileName){
        console.log("please provide directory name to create the directory");
        return;
    }
    if(fs.existsSync(fileName)){
        console.log("directory already exists");
        return;
    }
    fs.mkdir(fileName,(error)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("directory created successfully");
    })
}
if(command=="rmdir"){
    if(!fileName){
        console.log("please provide directory name to remove the directory")
        return;
    }
    if(!fs.existsSync(fileName)){
        console.log("directory does not exits");
        return;
    }
    fs.rmdir(fileName,(error)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log("directory removed successfully");
    })
}

if(command=="listdir"){
    if(!fileName){
        console.log("please provide directory name to list the files in the directory");
        return;
    }
    fs.readdir(fileName,(error,files)=>{
        if(error){
            console.log(error);
            return;
        }
        console.log(`list of the files in the directory ${fileName}`);
        files.forEach(file=>{
            console.log(file);

        })
    })
}


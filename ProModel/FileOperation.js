/**
 * Created by ahmed on 6/23/2017.
 */
var fs = require('fs');

module.exports = {
    /*path-> './dataset/test.txt'*/
    read : function (filePath){
        if(fs.existsSync(filePath)){
            var fileData =  fs.readFileSync(filePath,'utf-8').toString().split("\r");
            fileData = fileData.toString().split(" ");
            fileData = fileData.toString().split("\n");
            fileData = fileData.toString().split(",");
            for(var i = 0; i < fileData.length; i++)
                fileData[i] = fileData[i].trim();

            return fileData;
        }
        return 'wrong file path';
    },

    readLBL : function (filePath){
        if(fs.existsSync(filePath)){
            var fileData =  fs.readFileSync(filePath,'utf-8');
            fileData = fileData.toString().split("\n");
            for(var i = 0; i < fileData.length; i++)
                fileData[i] = fileData[i].trim();

            return fileData;
        }
        return 'wrong file path';
    },

    write : function (filePath, data, append){
        if(!append){
            if(fs.existsSync(filePath)){
                fs.writeFileSync(filePath, " " + data, 'utf-8');
                return true;
            }
            else {
                console.log("file not found");
                return false;
            }
        }
        else{
            fs.appendFileSync(filePath, "\n" + data,'utf-8');
            return true;
        }
    },

    writeLBL : function (filePath, data, append){
        if(!append){
            if(fs.existsSync(filePath)){
                for(var i=0; i< data.length; i++)
                    fs.writeFileSync(filePath, data[i] + "\n", 'utf-8');

                return true;
            }
            else {
                console.log("file not found");
                return false;
            }
        }
        else{
            for(var i=0; i< data.length; i++)
                fs.appendFileSync(filePath, data[i] + "\n",'utf-8');
            return true;
        }
    },

    delete : function (filePath) {
        if(fs.existsSync(filePath))
            return fs.unlinkSync(filePath);
    },

    dir : function (path) {
        return fs.readdirSync(path);
    }
};
const fs = require('fs')

const greet = "Hello World";

// Blocking sync way
// reading the text from input
const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInput);

// writing something inside the file
const textOutput = `this is all we know about avocado ${textInput}. \n created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOutput)


// Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err, data1)=>{
    // if error 
    if(err) {
        console.log("error is found");
        return
    }
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3)=>{
            console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2} ${data2}`, 'utf-8', (err) => {
                console.log("all files are readimng... :D")
            })
        });
    });
});
console.log('reading file....')
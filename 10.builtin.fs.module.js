const file =require('fs');

const read= file.readFileSync('./content/subfile/test.txt','utf8');
console.log(read);

// const write = file.writeFileSync('./content/subfile/newtest.txt','Hello the new test \n',{flag:'a'});
const write = file.writeFileSync('./content/subfile/newtest.txt','Hello the new test \n',{flag:'a'});
const read1= file.readFileSync('./content/subfile/newtest.txt','utf8');
console.log(read1); 


//with the call back function
const read2 = file.readFile('./content/subfile/test2.txt','utf8',(err,result)=>{
    if(err){
        console.log(err.message);
   return;
}
console.log(result);
    })
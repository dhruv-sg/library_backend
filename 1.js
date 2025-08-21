let rows  =5
let num = 1
let charCode = 65

for(let i  = 1 ; i<=rows;i++){
    let line = "";
    for (let j = 1; j<=i;j++){
        if(i%2!==0){
            line += num +""
            num++
        }else{
            line+= String.fromCharCode(charCode) + "";
            charCode++
        }
    }
    console.log(line.trim());
    
}
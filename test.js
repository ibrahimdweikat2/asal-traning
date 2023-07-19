const date=new Date();

const p=document.createElement('p');
let month=(date.getMonth() +1);
let newMonth=month;
if(month <10){
    newMonth=`0${month}`
}
p.innerHTML=`
    ${date.getDate()}/${newMonth}/${date.getFullYear()}
`;
document.getElementById('demo').appendChild(p);

demo.appendChild(p);


const replaceString=(str)=>{
    let result='';
for(let i of str){
    const charCode=i.charCodeAt();
    if(charCode >= 65 && charCode <=90){
        result += String.fromCharCode(((charCode -65 + 1) %26)+65);
    }else if(charCode >= 97 && charCode <= 122){
        result += String.fromCharCode(((charCode -97 +1)%26)+97);
    }
    else{
        result+=i;
    }
}
return result;
};


const str="abcdEErfggg$%hjkmm";

const result=replaceString(str);

document.getElementById('demo1').innerHTML=result;

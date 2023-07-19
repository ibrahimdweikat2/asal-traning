function asd(...args){
    args.map(item=>{
       switch(typeof item){
        case 'number':
            console.log(item.toString());
            default:
             console.log("error");
       }
    });
}


asd(123,"asdww",55522);
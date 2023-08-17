import React from 'react'
const withCustomParams=(param1,param2)=>event=>{
    console.log(param1,param2,event);
}
const createDynamicComp=config=>props=>{
    console.log(config,props);
    return (
        <div style={{...config}}>
            {props.children}
        </div>
    )
}
const Ggg = () => {
    const handleClick=withCustomParams("para1","para2");
    const DynamicCom=createDynamicComp({color:"blue",background:"lightblue"});
  return (
    <div>
        <DynamicCom>
            <div>
                <button onClick={handleClick}>Click</button>
            </div>
        </DynamicCom>
    </div>

  )
}

export default Ggg
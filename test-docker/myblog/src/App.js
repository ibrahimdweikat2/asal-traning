import {useState} from 'react'
import axios from 'axios'
function App() {
  const [dataPost,setData]=useState([]);
  if(typeof window !== 'undefined'){
    const fetchData=async ()=>{
      const res=await axios.get('http://localhost:4000/');
      setData(res?.data);
    }
    fetchData();
  }
  return (
    <div className="App">
      {
        dataPost?.map(item=>(
          <div key={item?.id}>
            {item?.name}
          </div>
        ))
      }
    </div>
  );
}

export default App;

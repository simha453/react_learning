
import React, { useState }  from 'react';
import Singleposts from '../singleposts/Singleposts';
function Posts(){
const [data,setData]=useState({name:'uday',desc:'Test description'})
const [count, setcount] = useState(0)
const [arrya, setarrya] = useState([2,3,4,7,5,6])

const onClick=()=>{
    setcount(count+1);
    setData({...data,name:"Simha"})
}



    return(
        <div>
            <h1>Test</h1>
            {data.name}
            {
                arrya.map(val=><span>{val}</span> )
            }
            <h1>count==={count}</h1>
            <button onClick={onClick}> click here</button>
            <Singleposts title={data.name} description={data.desc}/>
        </div>
    )
}
export default Posts;
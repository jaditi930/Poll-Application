import { useEffect, useState } from "react"
import Question from "./Question"

export default function Home()
{
    const [pollsArray,setPolls]=useState([])
    useEffect(()=>{

        fetch("http://127.0.0.1:7000/",{
            credentials:'include',

            })
            .then((res)=> res.json() )
            .then((data)=> {
            console.log(data);
            if (data.message=="success"){
            setPolls([...data.answered_polls,...data.unanswered_polls])
            }
                
            });
    },[])
    const polls=pollsArray.map((question)=>{
        return <Question question={question} all={pollsArray}/>
    })
    return (
        <ul>
        {polls}
        </ul>
    )
}
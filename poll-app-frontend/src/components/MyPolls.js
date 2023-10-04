import { useEffect, useState } from "react"
import Question from "./Question";

export default function MyPolls()
{
    const [myQuestions,setMyQuestions]=useState([])
    useEffect(()=>{

        fetch("http://127.0.0.1:7000/my_polls",{
            credentials:'include',

            })
            .then((res)=> res.json() )
            .then((data)=> {
            console.log(data.questions);
          setMyQuestions([...data.questions])
            });
    },[])
    const quesArray=myQuestions.map((ques)=>{
        return <>
        <Question question={ques} key={ques.id}/>
        <div>Total Count: {ques.total_count} votes</div>
        </>
    })
    return (
        <>
        {quesArray}
        </>
    )
}
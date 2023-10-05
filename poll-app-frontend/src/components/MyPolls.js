import { useEffect, useState } from "react"
import Question from "./Question";
import { useNavigate } from "react-router-dom"

export default function MyPolls(props)
{
    const navigate=useNavigate()
    const [myQuestions,setMyQuestions]=useState([])
    useEffect(()=>{

        fetch("http://127.0.0.1:7000/my_polls",{
            credentials:'include',

            })
            .then((res)=> res.json() )
            .then((data)=> {
                if(data.questions){
            console.log(data.questions);
          setMyQuestions([...data.questions])
          props.setDisplay("none")
                }
                else{
                    props.setDisplay("block")
                    props.setMsg("Failed to fetch your polls.")
                }

            })
            .catch((err)=>{
                props.setDisplay("block")
                props.setMsg("Error occured. Please login to continue.")
                navigate("/login")
            });
    },[])
    const quesArray=myQuestions.map((ques,index)=>{
        return <li>
        <Question question={ques} key={ques.id} index={index}/>
        <div class="alert alert-secondary" role="alert">Total Count: {ques.total_count} votes</div>
        </li>
    })
    return (
        <ul style={{listStyleType:"none"}}>
        { quesArray.length>0 ? <>{quesArray}</>
        : <h1>
        No polls to view.
        </h1>
        }
        </ul>
    )
}
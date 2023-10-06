import { useEffect, useState } from "react"
import Question from "./Question"
import { useNavigate } from "react-router-dom"

export default function Home(props)
{   
    const navigate=useNavigate()
    const [pollsArray,setPolls]=useState([])
    useEffect(()=>{

        fetch("https://aditi0601.pythonanywhere.com/",{
            credentials:'include',

            })
            .then((res)=> res.json() )
            .then((data)=> {
            console.log(data);
            if (data.message=="success"){
            setPolls([...data.answered_polls,...data.unanswered_polls])
            }   
            else{
                props.setDisplay("block")
                props.setMsg(data.message)
                navigate("/login")
            }
            })
            .catch((err)=>{
                props.setDisplay("block")
                props.setMsg("Error occured. Please login to continue.")
                navigate("/login")
            });
    },[])
    const polls=pollsArray.map((question,index)=>{
        return <Question question={question} setDisplay={props.setDisplay} setMsg={props.setMsg} index={index}/>
    })
    return (
        <ul style={{listStyleType:"none"}}>
        { pollsArray.length > 0 ? 
        <>{polls}</>
        : <h1>
            No active polls
        </h1>
        }
        </ul>
    )
}

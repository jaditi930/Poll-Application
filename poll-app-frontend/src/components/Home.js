import { useEffect, useState } from "react"
import Question from "./Question"
import { useNavigate } from "react-router-dom"

export default function Home(props)
{   
    const navigate=useNavigate()
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
    const polls=pollsArray.map((question)=>{
        return <Question question={question} setDisplay={props.setDisplay} setMsg={props.setMsg}/>
    })
    return (
        <ul>
        {polls}
        </ul>
    )
}
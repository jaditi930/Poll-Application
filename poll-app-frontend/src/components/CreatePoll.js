import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePoll(props)
{   const [options,setOptions]=useState([1,2])
    const navigate=useNavigate()

    function addOptions()
    {
        setOptions([...options,options.length+1])
    }

    function submitPoll(e){
        e.preventDefault()
        let ques=document.getElementById("question").value
        document.getElementById("question").value=""
        let optArray=[]
        for(let i=1;i<=options.length;i++)
        {
        let option=document.getElementById(`option${i}`).value
        optArray.push(option)
        document.getElementById(`option${i}`).value=""
        }
        if(ques==""||optArray[0]==""||optArray[1]=="")
        {
            props.setDisplay("block")
            props.setMsg("Failed to create poll. Question or option cannot be empty.")  
            return;
        }
        console.log(ques,optArray)
        fetch("http://127.0.0.1:7000/create_poll",{
            method:"POST",
            credentials:'include',
            body:JSON.stringify({
                options:optArray,
                question:ques
            }),
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "X-CSRFToken":getCookie("csrftoken")
                }
            })
            .then((response)=> response.json())
            .then((data)=>{
                console.log(data)
                props.setDisplay("block")
                props.setMsg(data.message)
      })
            .catch((err)=>{
                props.setDisplay("block")
                props.setMsg("Please login to continue")
                navigate("/login")
              })

    }

    let optionsArray=options.map((id)=>{
        return   <div class="mb-3" key={id}>
        <label for={`option${id}`} class="form-label">Option {id}</label>
        <input type="text" class="form-control" id={`option${id}`} name={`option${id}`} />
      </div>
    })

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    return (
        <>
        <form name="create_form">
  <div class="mb-3">
    <label for="question" class="form-label">Question</label>
    <input type="text" class="form-control" id="question" name="question"/>
  </div>
    {optionsArray}
  <div class="d-flex justify-center">
  <button type="button" class="btn btn-secondary" onClick={addOptions}>Add Options+</button>
  </div>

  <button type="submit" class="btn btn-primary" onClick={(e)=>{submitPoll(e)}}>Submit</button>
</form>
        </>
    )
}
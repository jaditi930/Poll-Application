export default function Question(props){

    const question=props.question

function submitResponse(e){
    const option_id=e.target.value
    const ques_id=question.id
    console.log(option_id,ques_id)
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
    fetch("http://127.0.0.1:7000/save_response",{
        method:"POST",
        credentials:'include',
        body:JSON.stringify({
            option_id:option_id,
            ques_id:ques_id
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
            console.log(err)
            props.setDisplay("block")
            props.setMsg("Error occured. Failed to save your response.")

        })

}

const optionArray=question.options.map((option,index)=>{
return  <>
<li class="list-group-item">
    { question.response   
        ?
        <>
            { question.response === option.id 
        ? <input class="form-check-input me-1" type="checkbox" value={option.id} id="firstCheckbox" checked/>
        : <input class="form-check-input me-1" type="checkbox" value={option.id} id="firstCheckbox" disabled/>
            }
        </>
        : <>
        {
            option.count == undefined
            ? <input class="form-check-input me-1" type="checkbox" value={option.id} id="firstCheckbox" onClick={(e)=>{submitResponse(e)}}/>
            : <></>
        }
        </>
        // <label ></label>
        // </>
     }

     {   
     option.count !== undefined
     
     ? <div class="d-flex">
            <div>{index+1}. {option.value}</div>
            <div class="ms-5">{option.count} votes</div>
            </div>
     
     : <label for="firstCheckbox">{option.value}</label>
     }
        </li>
</>
})
// 
return (
    <li key={question.id} class="card" style={{padding:"15px",margin:"15px"}}>
         <div class="card-header">
         Q{props.index+1}. {question.value}
        </div>
    <ul class="list-group list-group-flush">
    {optionArray}
    </ul>
    </li>
)
}
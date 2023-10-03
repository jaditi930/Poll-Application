export default function Question(props){
const question=props.question
console.log(props.all)

function submitResponse(e){
    const option_id=e.target.value
    const ques_id=question.id
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
        .then((response)=>{
            response.json()
        })
        .then((data)=>{
            console.log(data)
        })

}

const optionArray=question.options.map((option)=>{
return  <>
<li class="list-group-item">
    { question.response && question.response==option.id 
       ? <input class="form-check-input me-1" type="checkbox" value={option.id} id="firstCheckbox" checked/>
        :    <input class="form-check-input me-1" type="checkbox" value={option.id} id="firstCheckbox" onClick={(e)=>{submitResponse(e)}}/>
    }
        <label class="form-check-label" for="firstCheckbox">{option.value}</label>
        </li>
</>
})
return (
    <li key={question.id}>{question.value}
    <ul>
    {optionArray}
    </ul>
    </li>
)
}
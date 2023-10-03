export default function Question(props){
const question=props.question
console.log(question.response)
const optionArray=question.options.map((option)=>{
return  <>
<li class="list-group-item">
    { question.response && question.response==option.id 
       ? <input class="form-check-input me-1" type="checkbox" value={option.id} id="firstCheckbox" checked/>
        :    <input class="form-check-input me-1" type="checkbox" value={option.id} id="firstCheckbox"/>
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
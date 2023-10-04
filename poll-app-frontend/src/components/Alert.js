export default function Alert(props){
    return <>
    <div class="alert alert-success" role="alert" style={{display:props.display}}>
        {props.msg}
</div>
    </>
}
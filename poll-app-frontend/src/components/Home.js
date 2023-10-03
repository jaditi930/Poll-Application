import { useEffect } from "react"


export default function Home()
{
    useEffect(()=>{
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
        const csrftoken = getCookie('csrftoken');
        console.log(csrftoken)
        fetch("http://127.0.0.1:7000/",{
            method:"POST",
            credentials:'include',
            body:JSON.stringify({
                "user":"aditi"
                }),
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "X-CSRFToken":csrftoken
                }
            })
            .then((res)=> res.json() )
            .then((data)=> {
            console.log(data);
            });
    },[])
    return (
        <>
        </>
    )
}
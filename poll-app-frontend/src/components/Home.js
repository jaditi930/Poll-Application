import { useEffect } from "react"


export default function Home(props)
{
    useEffect(()=>{
        console.log(props.token)
        fetch("http://127.0.0.1:7000/",{
            'credentials':'include',
            'method':'GET',
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
import { useEffect } from "react"
const getApiData = async ()=>{
    const url ="https://jsonplaceholder.typicode.com/posts";
    let result = await(url)
    result = await result.json();
    console.warn("result");

}
useEffect(()=>{
    getApiData();
},[])
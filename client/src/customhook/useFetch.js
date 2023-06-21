 import { useEffect,useState } from 'react' 


 const useFetch = (url) => {
    const[data,setData]= useState(null)
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setData(data))
        .finally(()=>setLoading(false));
    },[])
  return {data,loading}
} 


/* const  useFetch = async (url) => {
    
    return   await fetch(url)
        .then((response)=>response.json())
        .then((data)=>data)
       
   
}*/

export default useFetch 
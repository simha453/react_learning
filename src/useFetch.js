import react, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, seterror] = useState(null)

  useEffect(() => {
   
        fetch(url)
          .then((res) => {
            if(!res.ok){
              throw Error('could not fetch the data from the server');
            }
            return res.json();
          })
          .then((data) => {
            setBlogs(data);
            setIsPending(false);
            seterror(null);
          })
          .catch(err =>{
            setIsPending(false);
            seterror(err.message);
            setBlogs([]);
          })
        
  },[]);

  return {error,blogs,isPending}

}
export default useFetch;
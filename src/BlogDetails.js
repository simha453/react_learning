import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
 const BlogDetails= () =>
 {
     const {id} =useParams();
     const { data: blogs, error, isPending } = useFetch('http://localhost:3000/blogs/' + id);
     const history = useHistory();
     console.log(blogs);
     const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
    }
     return(
         <div>
             <h2>Blog Detials {id} </h2>
             
             <button onClick={handleClick}>Delete</button>
         </div>
     )

 }

 export  default BlogDetails;
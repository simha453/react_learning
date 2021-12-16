import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAthour] = useState("mario");

  const handleSubmit= (e)=>{
      e.preventDefault();
      const blog= {title,body,author};
      console.log(blog);
      fetch('http://localhost:8000/blogs',
          {
       method:'POST',
       headers:{'content-type':'application/json'},
       body:JSON.stringify(blog)
          }).then(()=> {
            console.log('New blog added');
          })
      

  }
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <div className="create">
          <h2>Add  New Blog</h2>
          <label>Blog Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog Body:</label>
          <textarea
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label>Blog Author</label>
          <select value={author} onChange={(e) => setAthour(e.target.value)}>
            <option value="mario"> Mario</option>
            <option value="yoshi"> yoshi</option>
          </select>
          <button type="submit">Add Blog</button>
        </div>
      </form>
    </div>
  );
};
export default Create;

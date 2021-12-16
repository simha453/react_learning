import react, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const handleClick = () => {
    alert("testing");
  };

  const handleClickAgain = (name) => {
    alert(name);
    console.log("test");
  };
  const [myname, setName] = useState({ name: "Simha" });
  const handleName = () => {
    setName({ name: "chalam" });
    setName({ name: "Simhachalam" });
  };
  const [dummy, setdummy] = useState(true);

  

//using hooks

const {error,blogs,isPending} = useFetch("http://localhost:3000/blogs");
const [newdata,SetNewdata] = useState([]);
// console.log(newdata);
// let a = blogs;
useEffect(() => {
  SetNewdata(blogs);
}, [blogs])
const handleDelete = (id) => {
  const newblogs = blogs.filter((data) => data.id !== id);
  SetNewdata(newblogs);
};
const handleUpdate = (id) => {
  let data = blogs.find((val) => val.id === id);
  data.author = "jai balayya";
  console.log(data);
  let arrayData = blogs;
  let index = arrayData.findIndex((e) => e.id === id);
  arrayData.splice(index, 1, data);
  console.log(arrayData);
  SetNewdata(arrayData);
  setdummy(!dummy);
  // const newBlog=blogs.((data)=> data.id===id)
  // setBlogs(blogs.author='Updated');
};


  return (
    <div className="home">
      <h2>Home Page</h2>

      <p>My name is {myname.name}</p>
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <button onClick={() => handleClickAgain("simha")}>Click me Again</button>
      <br />
      <br />
      <button onClick={handleName}>Change my name</button>
      <br />
      <br />
      {error && <div>{ error}</div>}
      {isPending && <div>Loading ...</div>}
      <BlogList
        blogdata={newdata}
        title={"List of Blogs"}
        functionName={handleDelete}
        name={"Delete Blog"}
      />
      {/* <BlogList
        blogdata={blogs.filter((data) => data.author === "mario")}
        title={"Mario Blogs"}
        functionName={handleUpdate}
        name={"Update Blog"}
      /> */}
    </div>
  );
};

export default Home;

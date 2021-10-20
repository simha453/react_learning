import react, { useState } from "react";
import BlogList from  "./BlogList";
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

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

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
     <BlogList blogdata={blogs} title={'List of Blogs'}/>
     <BlogList blogdata={blogs.filter((data)=>(data.author==='mario'))} title={'Mario Blogs'}/>
    </div>
  );
};

export default Home;

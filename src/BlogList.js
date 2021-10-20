const BlogList= (props) => {
const blogs=props.blogdata;
return (
<div className='bloglist'>
<div className="home">
    <h2>{props.title}</h2>
          {blogs.map((data) => ( 
        <div className="blog-preview">
          <h2>{data.title}</h2>
          <p>{data.author}</p>
        </div>
          ))}
      </div>

</div>


);

}
export default  BlogList;
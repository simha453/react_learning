const BlogList= ({blogdata,title,functionName,name}) => {
const handleUpdate=(id) => {
  alert('update');
 }
return (
<div className='bloglist'>
<div className="home">
    <h2>{title}</h2>
          {blogdata.map((data) => {
     return (  <div className="blog-preview" key={data.id}>
          <h2>{data.title}</h2>
          <p>{data.author}</p>
          <button onClick={()=> functionName(data.id)}>{name}</button>
        </div>)
})}
      </div>

</div>


);

}
export default  BlogList;
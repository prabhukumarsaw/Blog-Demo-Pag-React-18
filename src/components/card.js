

const Blog= ({title, desc, author, img, children})=>{
    //const {title, desc, author, img}= props; //use to type less
    return(
        <>

  <div className="card-detail">
      <h3>{title}</h3>
      <p>{desc}<i> -{author}</i></p>
        {children}
      <div className="card">
        <img src={img}/>
      </div>
      </div>
  </>
    ) 
  }

  export default Blog
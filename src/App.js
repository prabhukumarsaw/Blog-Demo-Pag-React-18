import products from './data/blog';
import Blog from './components/card';
import './App.css';



const Detail = ()=>{
  return(
    <>
    <EventExample/>
    <div class="card-section">
    <div class="card-list">
    {products.map((blog) => {
	return (
		<Blog {...blog} key={blog.id}/>
	);
 
    })}
   </div>
   </div>
  </>
  )
}

const EventExample = ()=>{

  const handleBtnClick = ()=>{
    alert('button handle click')
  }

  const handleFormClick = (e)=>{
    //console.log(e);
    console.log(e.target.name);
    console.log('Form handle click');
  }

  return(
    <>    
    <div class="form-section">
    <form>
      <input onChange={handleFormClick} type="blog" name='product' placeholder='Search' />
      <button onClick={handleBtnClick}>Search</button>

    </form>
    </div>
    </>
  )
}






function App() {
  
  return (
   <>
    <h2 className="text-center" >Awesome Blogs </h2>
    <Detail/>
  

   </>
  );
}

export default App;

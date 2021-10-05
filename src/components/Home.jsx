//This IS a custom Hook that we can use to fetch in data from any sever 
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  

  const {data: blogs  , isLoading , errorMessage } = useFetch('http://localhost:8000/blogs');



  return ( 
    <div className="content">
      { errorMessage &&  <h4 style={{color: "red"}}>{errorMessage}</h4> }
      { isLoading && <h4>In Loading ...</h4> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
   );
}
 
export default Home;
//Hook  useState : to make a changes in variable with reactive mood 
//synatax : const [name , setName] = useState('Ayoub')
//first you should import the hook than use it


//useEffect : run code in evry render
//Syntax 
  // useEffect(() => {
  //   console.log("using useEffect !")
  //   console.log(blogs)
  // });

//   useEffect(() => {
//     console.log("using useEffect !")
//    // console.log(blogs)
//  }, [name]);
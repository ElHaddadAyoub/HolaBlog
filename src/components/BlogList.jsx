import { Link } from 'react-router-dom';

const BlogList = ({blogs}) => {

  return ( 
    
      blogs.map(blog => 
        <Link style={{ 'text-decoration':'none'}} to = {`/blog/${blog.id}`}>
          <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </div>
        </Link>
      )
    
    );
}
 
export default BlogList;
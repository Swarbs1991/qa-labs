import allBlogs from '../json/blogData.json';
import BlogList from './BlogList';
import { useState, useEffect } from 'react';

const Blogs = () => {
    let [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/blogs")
          .then((res) => {
                return res.json();
          }).then((data) => {
                //console.log(data);
                setBlogs(data);
          })
    }, []);
  
    let deleteBlog = (id) => {
        let newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }

    return (
        <div className='wrapper'>
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
        </div>
    );
}

export default Blogs;
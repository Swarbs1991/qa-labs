import { InstallDesktopOutlined } from '@mui/icons-material';
import allBlogs from '../json/blogData.json';
import BlogList from './BlogList';
import Spinner from './Spinner';
import { useState, useEffect } from 'react';

const Blogs = () => {
    let [blogs, setBlogs] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:4000/blogs")
          .then((res) => {
                if(!res.ok){
                    throw Error('Could not get data for that resource.')
                }

                return res.json();

          }).then((data) => {
                //console.log(data);
                setTimeout(() => {
                    setBlogs(data);
                    setError(null);
                    setIsLoading(false);
                }, 1000)
            }).catch( err => {
                setError(err.message);
            });
    }, []);
  
    let deleteBlog = (id) => {
        let newBlogs = blogs.filter(blog => blog.id != id);
        setBlogs(newBlogs);
    }

    return (
        <div className='wrapper'>
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
            {isLoading && <Spinner />}
        </div>
    );
}

export default Blogs;
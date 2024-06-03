import { Card, Box } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';


function BlogList(props) {
    const blogList = props.blogs.map( (blog) => {
        return (
            <Box key={blog.id} component="span" sx={{ display: 'inline-block', mx: '2px'}} >
                <Card variant="outlined" className="blog-list" sx={{color: "white", backgroundColor: "#111418"}}>
                    <div className='text-wrap'>
                        <div className='line'>Title:  {blog.title} </div>
                        <div className='line'>Author: {blog.author}</div>
                        <div className='line'>Body:   {blog.body}  </div>
                    </div>
                    <button className='del'>
                        <DeleteForever onClick={() => props.deleteBlog(blog.id) }> X </DeleteForever>
                    </button>
                </Card>
            </Box>
        )
    });

    return blogList;
}

export default BlogList;
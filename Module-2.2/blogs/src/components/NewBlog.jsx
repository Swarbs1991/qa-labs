import { Card, Box } from '@mui/material';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function NewBlog() {

    const authorRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();

    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        const data = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            body: bodyRef.current.value
        };
        addBlog(data);
    }

    function addBlog(data) {
        fetch("http://localhost:4000/blogs", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        }).then(() => { navigate("/") })
    }

    return(
        <Card>
            <form onSubmit={submitHandler}>
                <label>Title</label><input type="text" ref={titleRef}/>
                <label>Author</label><input type="text" ref={authorRef}/>
                <label>Body</label><input type="text" ref={bodyRef}/>
                <button>Add New Blog</button>
            </form>
        </Card>
    )
}

export default NewBlog;
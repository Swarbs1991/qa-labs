import { Link } from 'react-router-dom';
import Blogs from './Blogs';

const NotFound = () => {
    return (
        <>
            <h1>Error! 404</h1>
            <h2>Not found</h2>
            <Link path="/" element={<Blogs />}>Click here to go home</Link>
        </>
    )
}

export default NotFound;
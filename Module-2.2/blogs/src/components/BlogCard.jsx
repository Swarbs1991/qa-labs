import { Card } from '@mui/material';

const BlogCard = (props) => {
    return (
        <Card variant="outlined">
            {props.children}
        </Card>
    )
}

export default BlogCard;
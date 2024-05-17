export const getBlogResults = async () => {
    try {
        const response = await fetch();
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
        console.log(data);
        setBlog(data);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
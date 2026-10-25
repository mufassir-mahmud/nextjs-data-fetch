export const instant = false
const getPosts = async() =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
    }
    catch(err){
        throw new Error('Failed To fatch data')
    }
}
const PostsPage = async() => {
    const posts = await getPosts()
    return (
        <div>
            <h2 className='text-3xl font-bold my-6 text-center'>This is Posts Page {posts.length}</h2>
        </div>
    );
};

export default PostsPage;
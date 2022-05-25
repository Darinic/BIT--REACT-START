import Post from "../Post/Post";
import jokes from "../../Data/Jokes";

const Posts = () => {
    console.log(jokes[1].joke)
    return (  
        <div class="container-fluid">
        <div class="px-lg-5">
            <div class="row">    
                {jokes.map((post)=>
                <Post
                    key= {post.id}
                    setup= {post.setup}
                    delivery = {post.delivery}
                    joke= {post.joke}
                    type= {post.type}
                    // flags = {post.flags}
                    category = {post.category}
                />
                )}
            </div>
            </div>
            </div>
    );
}
 
export default Posts ;
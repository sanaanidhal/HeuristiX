import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To capture URL params
import axios from "axios";
import moment from 'moment';
import { useUser } from "../assets/theme/scripts/UserContext";


const SingleCommunity = () => {
  const [post, setPost] = useState([]); // State to store posts
  const { id } = useParams(); // Capture post ID from URL
  const { setUser , user }=useUser();

  useEffect( () =>  {
    const fetchPost = async () => {
      try{
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(response.data);
      } catch(error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPost();
  }, [id]);
  
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
<img
  className="floating-bubble-1 absolute right-0 top-0 -z-[1]"
  src="src/assets/theme/images/floating-bubble-1.svg"
  alt=""
/>
<img
  className="floating-bubble-2 absolute left-0 top-[387px] -z-[1]"
  src="src/assets/theme/images/floating-bubble-2.svg"
  alt=""
/>
<img
  className="floating-bubble-3 absolute right-0 top-[605px] -z-[1]"
  src="src/assets/theme/images/floating-bubble-3.svg"
  alt=""
/>

<section className="section blog-single">
  <div className="container">

    <div className="row justify-center">
      <div className="lg:col-10">
        <img className="rounded-xl" src="src/assets/theme/images/blog-single.png" alt="" />
      </div>
      <div className="mt-10 max-w-[810px] lg:col-9">
        <h1 className="h2">
          {post.title}
        </h1>
        <div className="mt-6 mb-5 flex items-center space-x-2">
          <div
            className="blog-author-avatar h-[58px] w-[58px] rounded-full border-2 border-primary p-0.5"
          >
            <img src="src/assets/theme/images/blog-author.png" alt="" />
          </div>
          <div className="">
            <p className="text-dark"> {post.name} </p>
            <span className="text-sm">{moment(post.created_at).format('MMMM Do, YYYY')}. {post.timetoread} Read</span>
          </div>
        </div>

        <div className="content">
          <p>
            {post.content}
          </p>

         
          {/* <div className="blockquote my-10 rounded-xl bg-white py-8 px-16 lg:px-20">
            <blockquote className="text-2xl text-dark">
              A wise girls her limit to touch.To Repellat neque praesentium .The
              me an idea, so I as quickly To get.
            </blockquote>
            <p className="mt-4 mb-0">Darlene Robertson</p>
          </div> */}

        </div>
        <div className="comments">
          <h3
            className="h5 inline-block border-b-[3px] border-primary font-primary font-medium leading-8"
          >
            Comments
          </h3>
          <div className="comment flex space-x-4 border-b border-border py-8">
            <img
              src="src/assets/theme/images/comment-author-1.png"
              className="h-[70px] w-[70px] rounded-full"
              alt=""
            />
            <div>
              <h4 className="font-primary text-lg font-medium capitalize">
                ronin bishop
              </h4>
              <p className="mt-2.5">
                April 18, 2020 at 6.25 pm
                <a className="ml-4 text-primary" href="#">Replay</a>
              </p>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec et
                ipsum ullamcorper venenatis fringilla. Pretium, purus eu nec
                vulputate vel habitant egestas.ornare ipsum
              </p>
            </div>
          </div>
          <div className="comment flex space-x-4 py-8">
            <img src="src/assets/theme/images/icons/replay-arrow.svg" alt="" />
            <img
              src="src/assets/theme/images/comment-author-2.png"
              className="h-[70px] w-[70px] rounded-full"
              alt=""
            />
            <div>
              <h4 className="font-primary text-lg font-medium capitalize">
                Kathryn Murphy
              </h4>
              <p className="mt-2.5">
                April 18, 2020 at 6.25 pm
                <a className="ml-4 text-primary" href="#">Replay</a>
              </p>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec et
                ipsum ullamcorper venenatis fringilla. Pretium, purus eu nec
                vulputate vel habitant egestas.ornare ipsum
              </p>
            </div>
          </div>
        </div>
        <form className="comment-form" action="#" method="POST">
          <p className="mb-4">LEAVE A REPLAY</p>
          <div className="form-group">
            <textarea cols={30} rows={10}></textarea>
          </div>            
          <input
            type="Submit"
            className="btn btn-primary mt-8 min-w-[189px] cursor-pointer"
            value="Post Comment"
          />
        </form>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
export default SingleCommunity

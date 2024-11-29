import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}>
          <RiDeleteBin5Fill />
        </span>

        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge bg-success tags">
            {tag}
          </span>
        ))}
        <div className="alert alert-primary p-2 d-flex justify-content-between">
          <span className="badge bg-success">
            Likes: {post.reactions.likes}
          </span>
          <span className="badge bg-danger">
            Dislikes: {post.reactions.dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;

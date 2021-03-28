import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

function PostContent({ post }) {
	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={`/images/posts/${post.image}`} />
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;

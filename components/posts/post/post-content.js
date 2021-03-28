import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const post = {
	title: "Getting started with Next.js",
	image: "getting-started-nextjs.png",
	slug: "getting-started-with-nextjs",
	date: "2022-03-03",
	content: "# This is a first post",
};

function PostContent() {
	return (
		<article className={classes.content}>
			<PostHeader
				title={post.title}
				image={`/images/posts/${post.slug}/${post.image}`}
			/>
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;

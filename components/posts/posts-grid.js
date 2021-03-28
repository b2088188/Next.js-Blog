import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

function PostsGrid({ posts }) {
	return (
		<ul classes={classes.grid}>
			{posts.map((el, i) => (
				<PostItem key={i} post={el} />
			))}
		</ul>
	);
}

export default PostsGrid;

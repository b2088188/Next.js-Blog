import PostContent from "../../components/posts/post/post-content";
import { client } from "../../utils/api-client";

function IndividualPostPage({ post }) {
	return <PostContent post={post} />;
}

export async function getStaticProps(context) {
	const {
		params: { postId },
	} = context;
	const {
		data: { post },
	} = await client(`/api/v1/posts/${postId}`);
	return {
		props: {
			post,
		},
		revalidate: 60 * 5,
	};
}

export async function getStaticPaths() {
	const {
		data: { posts },
	} = await client(`/api/v1/posts`);
	const postsIds = posts.map((el) => {
		return {
			params: {
				postId: el._id,
			},
		};
	});
	return {
		paths: postsIds,
		fallback: false,
	};
}

export default IndividualPostPage;

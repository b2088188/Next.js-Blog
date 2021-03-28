import AllPosts from "../../components/posts/all-posts";
import { client } from "../../utils/api-client";

function AllPostsPage({ posts }) {
	return <AllPosts posts={posts} />;
}

export async function getStaticProps() {
	const {
		data: { posts },
	} = await client("/api/v1/posts");

	return {
		props: {
			posts,
		},
		revalidate: 60 * 5,
	};
}

export default AllPostsPage;

import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featured-posts";
import { client } from "../utils/api-client";

function HomePage({ posts }) {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
}

export async function getStaticProps() {
	const {
		data: { posts },
	} = await client("/api/v1/posts");
	const featuredPosts = posts.filter((el) => el.isFeatured);
	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 60 * 5,
	};
}

export default HomePage;

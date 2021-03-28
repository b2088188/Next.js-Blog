import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featured-posts";

const posts = [
	{
		title: "Getting started with Next.js",
		image: "getting-started-nextjs.png",
		slug: "getting-started-with-nextjs",
		excerpt:
			"Next.js is a the React framework for production, it makes building fullstack React app easily.",
		date: "2022-03-03",
	},
	{
		title: "Getting started with Next.js 2",
		image: "getting-started-nextjs.png",
		slug: "getting-started-with-nextjs",
		excerpt:
			"Next.js is a the React framework for production, it makes building fullstack React app easily.",
		date: "2022-03-03",
	},
	{
		title: "Getting started with Next.js 3",
		image: "getting-started-nextjs.png",
		slug: "getting-started-with-nextjs",
		excerpt:
			"Next.js is a the React framework for production, it makes building fullstack React app easily.",
		date: "2022-03-03",
	},
	{
		title: "Getting started with Next.js 4",
		image: "getting-started-nextjs.png",
		slug: "getting-started-with-nextjs",
		excerpt:
			"Next.js is a the React framework for production, it makes building fullstack React app easily.",
		date: "2022-03-03",
	},
];

function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
}

export default HomePage;

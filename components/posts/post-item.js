import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem({ post }) {
	const { title, image, excerpt, date, _id } = post;
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<li className={classes.post}>
			<Link href={`/posts/${_id}`}>
				<a>
					<div className={classes.image}>
						<Image
							src={`/images/posts/${image}`}
							alt={title}
							width={300}
							height={200}
							layout="responsive"
						/>
					</div>
					<div className={classes.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
}

export default PostItem;

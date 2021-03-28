import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/shunze.JPG"
					alt="An image showing myself"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Shunze</h1>
			<p>
				I blog about web development - especially front-end frameworks like
				React.
			</p>
		</section>
	);
}

export default Hero;

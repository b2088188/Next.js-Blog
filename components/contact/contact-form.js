import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

function ContactForm() {
	const dispatch = useDispatch();
	const fetchState = useSelector((state) => state.fetchState);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (fetchState.status === "resolved") {
			setEmail("");
			setName("");
			setMessage("");
		}
		if (fetchState.status !== "idle") {
			const timer = setTimeout(() => {
				dispatch({ type: "FETCH_RESET" });
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [fetchState.status]);

	function onSendMessage(e) {
		e.preventDefault();
		dispatch({
			type: "CREATE_CONTACT_REQUESTED",
			payload: {
				formData: {
					name,
					email,
					message,
				},
			},
		});
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={onSendMessage}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<input
						type="text"
						id="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
				</div>

				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{fetchState.status === "pending" ? (
				<h2>Loading...</h2>
			) : fetchState.status === "rejected" ? (
				<h2>{fetchState.error.message}</h2>
			) : fetchState.status === "resolved" ? (
				<h2>Success!</h2>
			) : null}
		</section>
	);
}

export default ContactForm;

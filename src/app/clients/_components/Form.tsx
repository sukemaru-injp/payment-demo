"use client";
import { FC, useState } from "react";

type Props = {
	submit: (name: string, email: string) => void;
};

export const ClientForm: FC<Props> = ({ submit }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2px",
					maxWidth: "30vw",
				}}
				onSubmit={(e) => {
					e.preventDefault();
					submit(name, email);
				}}
			>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<button type="submit">Submit</button>
			</form>
		</>
	);
};

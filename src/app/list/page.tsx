import { NextPage } from "next";
import { container, head } from "./styles.css";

const List: NextPage = () => {
	return (
		<main className={container}>
			<h1 className={head}>List</h1>
		</main>
	);
};

export default List;

import { NextPage } from "next";
import { container, head } from "./styles.css";
import fincodeClient from "../lib/fin";

const Home: NextPage = () => {
	return (
		<main className={container}>
			<h1 className={head}>PaymentDemo</h1>
		</main>
	);
};

export default Home;

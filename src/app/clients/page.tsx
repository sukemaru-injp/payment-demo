import { NextPage } from "next";
import { container, head } from "./styles.css";
import { Clients } from "./_components/Clients";
import { ListView } from "./_components/ListView";
import { Suspense } from "react";

const ClientsPage: NextPage = () => {
	return (
		<main className={container}>
			<h1 className={head}>Clients</h1>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Clients
						render={(clients) => {
							console.log("clients", clients);
							return <ListView list={clients.list ?? []} />;
						}}
					/>
				</Suspense>
			</div>
		</main>
	);
};

export default ClientsPage;

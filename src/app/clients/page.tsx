import { NextPage } from "next";
import { container, head } from "./styles.css";
import { Clients } from "./_components/Clients";
import { ListView } from "./_components/ListView";
import { ClientForm } from "./_components/Form";
import { Suspense, useCallback } from "react";
import fincodeClient from "@/lib/fin";

const ClientsPage: NextPage = () => {
	const submit = useCallback(async (name: string, email: string) => {
		"use server";
		const res = await fincodeClient.customers.create(
			{
				name,
				email,
			},
			{
				tenantShopId: process.env.NEXT_PUBLIC_FINCODE_TENANT_TARGET_ID ?? "",
			},
		);

		console.log("res", res);
	}, []);
	return (
		<main className={container}>
			<h1 className={head}>Clients</h1>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Clients
						render={(clients) => {
							return <ListView list={clients.list ?? []} />;
						}}
					/>
				</Suspense>
			</div>

			<div style={{ padding: "8px 0px" }}>
				<h3 className={head}>Add a client</h3>
				<ClientForm submit={submit} />
			</div>
		</main>
	);
};

export default ClientsPage;

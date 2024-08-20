import { NextPage } from "next";
import { FC, Suspense } from "react";
import { container, head, viewContainer, name } from "./styles.css";
import { Create } from "./_components/Create";
import { ShopObject } from "@fincode/node";
import { TenantsRender } from "./_components/TenantsRender";
const Tenants: NextPage = () => {
	return (
		<main className={container}>
			<h1 className={head}>Tenants</h1>

			<Suspense fallback={<>Loading...</>}>
				<TenantsRender render={(r) => <ListView list={r.list ?? []} />} />
			</Suspense>
			<Create />
		</main>
	);
};

type Props = {
	list: readonly ShopObject[];
};

export const ListView: FC<Props> = ({ list }) => {
	return (
		<div>
			{list.map((v) => (
				<div key={v.id} className={viewContainer}>
					<p className={name}>{v.shop_name}</p>
					<p>{v.send_mail_address}</p>
					<p>{v.updated ?? ""}</p>
				</div>
			))}
		</div>
	);
};
export default Tenants;

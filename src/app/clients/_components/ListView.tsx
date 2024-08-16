import { FC } from "react";
import { CustomerObject } from "@fincode/node";
import { clientContainer, name } from "./styles.css";

type Props = {
	list: readonly CustomerObject[];
};

export const ListView: FC<Props> = ({ list }) => {
	return (
		<div>
			{list.map((client) => (
				<div key={client.id} className={clientContainer}>
					<p className={name}>{client.name}</p>
					<p>{client.email}</p>
					<p>{client.created ?? ""}</p>
				</div>
			))}
		</div>
	);
};

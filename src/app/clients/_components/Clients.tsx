import fincode from "@/lib/fin";
import { ListResponse, CustomerObject } from "@fincode/node";

type Props = { render: (clients: ListResponse<CustomerObject>) => JSX.Element };
export const Clients = async ({ render }: Props) => {
	const clients = await fincode.customers.retrieveList(undefined, {
		tenantShopId: process.env.NEXT_PUBLIC_FINCODE_TENANT_TARGET_ID ?? "",
	});
	// 一括登録された決済を取得
	// const test = await fincode.paymentBulks.retrieveDetailList("", { pay_type: "Card" });
	// console.log("test", test);
	return render(clients);
};

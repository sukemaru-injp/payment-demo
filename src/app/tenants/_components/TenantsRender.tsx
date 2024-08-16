import fincode from "@/lib/fin";
import { ListResponse, ShopObject } from "@fincode/node";

type Props = { render: (clients: ListResponse<ShopObject>) => JSX.Element };
export const TenantsRender = async ({ render  }: Props) => {
  const tenants = await fincode.tenants.retrieveList();
  return render(tenants);
}
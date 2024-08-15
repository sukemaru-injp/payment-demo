
import fincode from "@/lib/fin";
import { ListResponse, CustomerObject } from "@fincode/node";

type Props = { render: (clients: ListResponse<CustomerObject>) => JSX.Element };
export const Clients = async ({ render  }: Props) => {
  const clients = await fincode.customers.retrieveList();
  console.log("fireeeeee", clients);
  return render(clients);
}
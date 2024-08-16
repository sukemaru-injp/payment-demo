import { NextPage } from "next";
import { container, head } from "./styles.css"
import { Create } from "./_components/Create";

const Tenants: NextPage = () => {
  return (
    <main className={container}>
      <h1 className={head}>Tenants</h1>

      <Create />
    </main>
  );
}

export default Tenants;
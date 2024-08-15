import { NextPage } from "next";
import { container, head } from "./styles.css"

const Home: NextPage = () => {
  console.log("fireeee", process.env.NEXT_PUBLIC_FINCODE_API_KEY)
  return (
    <main className={container}>
      <h1 className={head}>PaymentDemo</h1>
    </main>
  );
}

export default Home;
import { getSession } from "next-auth/react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden flex">
      <main className="flex w-full">
        <Sidebar />
        <Dashboard />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

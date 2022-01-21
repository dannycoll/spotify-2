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

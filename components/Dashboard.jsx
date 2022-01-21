import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const colours = [
  "from-pink-500",
  "from-fuchsia-500",
  "from-purple-500",
  "from-violet-500",
  "from-indigo-500",
  "from-blue-500",
  "from-sky-500",
  "from-cyan-500",
  "from-teal-500",
  "from-emerald-500",
  "from-green-500",
  "from-lime-500",
  "from-yellow-500",
  "from-amber-500",
  "from-orange-500",
  "from-red-500",
];

const Dashboard = () => {
  const { data: session } = useSession();
  const [colour, setColour] = useState(colours[0]);
  useEffect(() => {
    const selected = shuffle(colours).pop();
    setColour(shuffle(colours).pop());
  }, []);
  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8 text-white">
        <div className="flex items-center bg-black space-x-2 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user?.image}
            width={200}
            height={200}
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${colour} h-80 text-white p-8`}
      ></section>
    </div>
  );
};

export default Dashboard;

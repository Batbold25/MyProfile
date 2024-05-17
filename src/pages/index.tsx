import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" w-screen h-screen  bg-gradient-to-tr from-orange-100 via-amber-600 to-orange-300">
      <div className=" w-96 h-96 bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-80%  "></div>
    </div>
  );
}

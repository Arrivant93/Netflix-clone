import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";

const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      <section className="relative">
        <Image
          className="object-cover w-full h-[800px]"
          src="/1341732.jpeg"
          width={600}
          height={600}
          alt="Hero"
        />
        <div className="absolute top-[40%] left-6 max-w-2xl space-y-4">
          <Image src="/Shangri-La-Frontier-logo.png" width={400} height={400} alt="Nom du manga" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis quaerat, nobis
            accusantium voluptatum voluptas! Quidem inventore voluptatum fugiat illo officia et,
            quos possimus aperiam.
          </p>
          <div className="flex gap-2  ">
            <Button className="flex text-black px-4 py-1.5 rounded-sm font-medium gap-2 text-[14px] items-center bg-white">
              <Play color="#000" className="" />
              Lecture
            </Button>
            <Button className=" flex text-white px-4 py-1.5 rounded-sm font-medium gap-2 text-[14px] items-center bg-zinc-500 ">
              <Info /> Plus d&apos;infos
            </Button>
          </div>
        </div>
        <div className="absolute bottom-32 right-0 z-10 w-16 pl-3 py-1.5 border-l-2  bg-zinc-700">
          <p>16+</p>
        </div>
      </section>
      <section className="space-y-12 px-6 mt-16">
        <article>
          <h2 className="mb-2">Appréciés sur Netflix</h2>
          <div className="h-[110px] w-[200px] bg-white sapce" />
        </article>
        <article>
          <h2 className="mb-2">Séries policiere d&apos;Asie de l&apos;Est</h2>
          <div className="h-[110px] w-[200px] bg-white" />
        </article>
        <article>
          <h2 className="mb-2"> Netflix</h2>
          <div className="h-[110px] w-[200px] bg-white" />
        </article>
      </section>
    </>
  );
};

export default HomePage;

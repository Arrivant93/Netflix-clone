import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Title } from "@/components/ui/title";
import { Info, Play } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { anime } from "@/jikan-api/anime/anime";
import Card from "@/components/cards/card";
import { redirect } from "next/navigation";


const HomePage: NextPage = async () => {
  // en attendant d'avoir l'api des films
  const animes = await anime.getAnimes();
  // console.log(animes.data);

  const session = await auth()

  if (!session) {
    redirect('/login'); // Redirection vers la page de connexion
  }

  console.log(session);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <Image
          className="object-cover w-full max-h-[1280px] h-full"
          src="/1341732.jpeg"
          width={1920}
          quality={100}
          height={800}
          alt="Hero"
        />
        <article className="absolute top-[40%] max-w-2xl space-y-4 global-padding-x">
          <Image
            src="/Shangri-La-Frontier-logo.png"
            width={400}
            height={400}
            alt="Nom du manga"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis
            quaerat, nobis accusantium voluptatum voluptas! Quidem inventore
            voluptatum fugiat illo officia et, quos possimus aperiam.
          </p>
          <div className="flex gap-2">
            <Button className="flex text-black px-4 py-1.5 rounded-sm font-medium gap-2 text-[14px] items-center bg-white">
              <Play color="#000" className="" />
              Lecture
            </Button>
            <Button className=" flex text-white px-4 py-1.5 rounded-sm font-medium gap-2 text-[14px] items-center bg-zinc-500 ">
              <Info /> Plus d&apos;infos
            </Button>
          </div>
        </article>
        <article className="absolute bottom-32 right-0 z-10 w-16 pl-3 py-1.5 border-l-2  bg-zinc-700">
          <p>16+</p>
        </article>
      </section>
      {/* Hero */}

      <section className="space-y-12 global-padding-x mt-16">
        <article>
          <Title variant="section" className="mb-2">
            Notre sélection du jour pour vous
          </Title>
          <Carousel>
            <CarouselContent>
              {animes.data.map((item, key) => (
                <CarouselItem className="basis-1/6" key={key}>
                  <Card mal_id={item.mal_id} releaseYear={item.aired.prop.from.year!} genres={item.genres} rating={item.rating} year={item.aired.prop.to.year!} synopsis={item.synopsis}episodes={item.episodes!} scored_by={item.scored_by} title={item.title} score={item.score} image={item.images.jpg.image_url}/>

                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </article>
        <article>
          <Title variant="section" className="mb-2">
            Ma liste
          </Title>
          <Carousel>
            <CarouselContent>
            {animes.data.map((item, key) => (
                <CarouselItem className="basis-1/6" key={key}>
                  <div className="h-[160px] bg-white sapce" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </article>
      </section>
    </>
  );
};

export default HomePage;

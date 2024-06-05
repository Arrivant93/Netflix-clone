/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlus, Info, Play, Plus, Star, ThumbsUp } from "lucide-react";
import { useConvertScore } from "@/hook/use-convert-score";
import { Button } from "../ui/button";
import { useformatRating } from "@/hook/use-pegi";
import React from "react";
import Addtowatch from "@/features/add-to-watch";
import { useSession } from "next-auth/react";

interface ICardProps {
  mal_id:number
  image: string;
  title: string;
  score: number;
  scored_by: number;
  episodes: number;
  synopsis: string;
  year: number;
  rating: string;
  releaseYear: number;
  genres: Array<{
    mal_id: number;
    name: string;
  }>;
}

const Card: FC<ICardProps> = (props): JSX.Element => {
  const [isViewing, setIsViewing] = useState<boolean>(false);
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isViewing ? (
          <div
            className=" relative h-[300px] bg-[#17191aed]"
            onMouseLeave={() => setIsViewing(false)}
          >
            <img
              className=" absolute w-full h-[300px] -z-10"
              src={props.image}
              alt={"photo anime"}
              width={200}
              height={100}
            />
            <div className="p-2 space-y-2">
              <h2 className="max-w-[200px] font-bold">{props.title}</h2>
              <div className="flex items-center gap-1 font-regular">
                <h3>{props.score}/10</h3>
                <Star size={15} />({useConvertScore(props.scored_by)})
              </div>
              <div className=" max-w-[200px] space-x-2 flex items-center text-zinc-400">
                <h4>{props.episodes}</h4>
                <p>episodes</p>
              </div>
              <div className="text-[15] line-clamp-5">{props.synopsis}</div>
            </div>
          </div>
        ) : (
          <img
            onMouseEnter={() => setIsViewing(true)}
            className="w-full h-[300px]"
            src={props.image}
            alt={"photo anime"}
            width={200}
            height={100}
          />
        )}
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll h-[95vh] w-full max-w-6xl">
        <img
          className="w-[400px] h-[600px] object-cover mx-auto"
          src={props.image}
          alt={"photo anime"}
          width={500}
          height={50}
        />
        <h2>{props.title}</h2>
        <div className="flex gap-3">
          <Button className="flex text-black px-4 py-1.5 rounded-sm font-medium gap-2 text-[14px] items-center bg-white">
            <Play color="#000" className="" />
            Lecture
          </Button>
          <Addtowatch
          mal_id={props.mal_id}
            releaseYear={props.releaseYear}
            image={props.image}
            title={props.title}
            rating={props.rating}
            synopsis={props.synopsis}
          />
          <ThumbsUp
            size={35}
            className="border border-zinc-600 rounded-full p-1"
          />
        </div>
        <div className="grid grid-cols-[1fr_.5fr] gap-4">
          <div>
            <div className="flex gap-2">
              <div className="flex text-green-700">
                {props.score}
                <h3>/10</h3>
              </div>
              <h3>{props.year}</h3>
              <div className="flex gap-2">
                {props.episodes}
                <h3>episodes</h3>
              </div>
            </div>
            <div className="border border-zinc-600 p-1 inline-flex mt-3">
              {useformatRating(props.rating)}
            </div>
            <div className="mt-4">
              <p>{props.synopsis}</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[#3d3d3d]">Genres :</p>
            {props.genres.map((value, index) => (
              <React.Fragment key={index}>
                <p>
                  {value.name}
                  {index < props.genres.length - 1 && ", "}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Card;

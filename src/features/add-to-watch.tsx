"use client";

import { addToWatchList } from "@/actions/action";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { FC, useTransition } from "react";

export interface IWatchListProps {
  mal_id: number;
  image: string;
  title: string;
  rating: string;
  synopsis: string;
  releaseYear: number;
}

const Addtowatch: FC<IWatchListProps> = ({
  mal_id,
  image,
  title,
  rating,
  synopsis,
  releaseYear,
}): JSX.Element => {
  const [isPending, startTransition] = useTransition();
  const { data: session, status } = useSession();

  const handleClick = () => {
    startTransition(() => {
      addToWatchList(session!.user.id!, {
        mal_id,
        image,
        title,
        rating,
        synopsis,
        releaseYear,
      });
    });
  };

  return (
    <Button variant={"ghost"} onClick={handleClick} disabled={isPending}>
      <Plus size={35} className="border border-zinc-600 rounded-full p-1" />
    </Button>
  );
};

export default Addtowatch;

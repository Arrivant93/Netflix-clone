"use server";
import { prisma } from "@/lib/prisma";
import { IWatchListProps } from "@/features/add-to-watch";

export async function addToWatchList(userId: string, data: IWatchListProps) {
  const watchlist = await prisma.watchlist.create({
    data: {
      userId,
      Animes: {
        create: {
          title: data.title,
          image:data.image,
          Description:data.synopsis,
          malId:String(data.mal_id),
          rating:data.rating,
          releaseDate:data.releaseYear,
        }
      }
    },
    
  });

  console.log(watchlist);
}

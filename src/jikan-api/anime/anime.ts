import { callApi } from "../call-api";
import { Animes } from "../types/types";

class Anime {
  public async getAnimes(): Promise<Animes> {
    return await callApi("https://api.jikan.moe/v4/anime");
  }
}

export const anime = new Anime();

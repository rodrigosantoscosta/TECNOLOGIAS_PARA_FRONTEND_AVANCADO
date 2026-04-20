import type { ChuckNorrisJoke } from "./types/types.ts";

const BASE_URL = "https://api.chucknorris.io/jokes/random";

export async function getRandomJoke(): Promise<ChuckNorrisJoke> {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`Error fetching joke: ${response.status}`);
  }

  const data: ChuckNorrisJoke = await response.json();
  return data;
}
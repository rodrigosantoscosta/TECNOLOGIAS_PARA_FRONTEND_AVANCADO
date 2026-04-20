import axios from "axios";
import { useState } from "react";
import "./styles.css";

import type { ChuckNorrisJoke } from "../../types/types";

const Home = () => {
  const [joke, setJoke] = useState<ChuckNorrisJoke | null>(null);

  const randomJoke = async () => {
    try {
      const response = await axios.get<ChuckNorrisJoke>(
        "https://api.chucknorris.io/jokes/random"
      );

      setJoke(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="image">
        {!joke ? (
          <img src="CHUCK_NORRIS_REACT\src\assets\angry.jpg" alt="angry" />
        ) : (
          <img src="CHUCK_NORRIS_REACT\src\assets\boobies.gif" alt="funny" />
        )}
      </div>

      <div className="joke">
        <h2>{joke?.value}</h2>

        <button onClick={randomJoke} className="submit">
          {!joke
            ? "Click here for a not funny joke"
            : "Click here for another not funny joke"}
        </button>
      </div>
    </div>
  );
};

export default Home;
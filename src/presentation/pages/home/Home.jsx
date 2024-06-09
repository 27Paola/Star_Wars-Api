import "./Home.css";
import { useGetCharacters } from "../../../data/services/character-service";

import React from "react";

const Home = () => {
  const { loading, error, data } = useGetCharacters();

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error?.message}</p>
  console.log(data)
  return <div>Home</div>;
};

export default Home;

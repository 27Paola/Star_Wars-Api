import { Routes, Route } from "react-router-dom";
import Home from "../presentation/pages/home/Home";
import NumberPrinter from "../../Logic-Exercises/NumberPrinter";
import PokemonSequence from "../../Logic-Exercises/Pokemon";

const RouterOutlet = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/logic-algoritms/number-printer" element={<NumberPrinter/>}/>
        <Route path="/logic-algoritms/pokemon" element={<PokemonSequence/>}/>
      </Routes>
    </>
  );
};

export default RouterOutlet;

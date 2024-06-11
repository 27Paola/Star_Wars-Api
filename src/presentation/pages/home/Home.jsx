import "./Home.css";
import { useGetCharacters } from "../../../data/services/character-service";
import Loading from "../../ui/Loading/Loading";
import HomeService from "../../components/HomeService/HomeService";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../layout/Navbar/Navbar";

const Home = () => {
  const { loading, error, data } = useGetCharacters();

  if(loading) return (<Loading/>)
  if(error){
    console.error(error.message)
  }

  return (
    <>
      <Navbar />
      <HomeService data={data} />
      <Footer />
    </>
  );
};

export default Home;

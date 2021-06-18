import * as React from "react";

import "./index.scss";
import { getMovie } from "../../api/movies";
import MainView from "../../components/Home/MainView/MainView";
import ResultBySearch from "../../components/Home/ResultBySearch/ResultBySearch";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [searchString, setSearchString] = React.useState("");
  const [dataMovie, setDataMovie] = React.useState({
    image: "",
    title: "",
    rating: "",
    genres: "",
    awards: "",
  });

  React.useEffect(() => {
    if (searchString.trim()) {
      getMovie(searchString).then((res) => {
        const { image, imDbRating: rating, genres, title, awards } = res;
        console.log(genres);
        const genresPreparation = genres.split(",").join(" | ");
        setDataMovie({ image, rating, genres: genresPreparation, title, awards });
      });
    }
  }, [searchString]);

  const inputSearchHandler = (str?: string) => {
    if (str) {
      setSearchString(str);
    }
  };

  return (
    <div className="home">
      <MainView inputSearchHandler={inputSearchHandler} />
      {!!dataMovie.title && <ResultBySearch {...dataMovie} />}
    </div>
  );
};

export default Home;

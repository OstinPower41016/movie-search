import * as React from "react";

import "./ResultBySearch.scss";

interface IResultBySearchProps {
  image: string;
  title: string;
  rating: string;
  genres: string;
  awards: string;
}

const ResultBySearch: React.FunctionComponent<IResultBySearchProps> = ({
  image,
  title,
  rating,
  genres,
  awards,
}) => {
  return (
    <div className="search-result">
      <img src={image} alt={title} />
      <div className="search-result__header">
        <div className="search-result__title">{title}</div>
        <div className="search-result__genres">{genres}</div>
      </div>
      <div className="search-result__rating">IMDb {rating}</div>
      <div className="search-result__awards">{awards}</div>
    </div>
  );
};

export default ResultBySearch;

import * as React from "react";

import "./MainView.scss";
import trailer from "./assets/trailer.mp4";
import Container from "../../layouts/container/container";

interface IMainViewProps {
  inputSearchHandler: (str?: string) => void;
}

const MainView: React.FunctionComponent<IMainViewProps> = ({ inputSearchHandler }) => {
  const input = React.useRef<HTMLInputElement>(null);

  const inputKeyHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      inputSearchHandler(input.current?.value);
    }
  };

  return (
    <>
      <Container>
        <div className="home__content">
          <p className="home__header">Unlimited movies, TV shows, and more.</p>
          <p className="home__sub-header">Watch anywhere. Cancel anytime.</p>
          <div className="home__search">
            <input
              type="text"
              className="home__search-input"
              placeholder="Type here smth..."
              ref={input}
              onKeyDown={(e) => inputKeyHandler(e)}
            />
            <button
              className="home__search-action"
              onClick={(e) => inputSearchHandler(input.current?.value)}
            >
              Search
            </button>
          </div>
        </div>
      </Container>
      <div className="home__video-mask"></div>
      <video className="home__video" autoPlay muted loop preload="auto" src={trailer}></video>
    </>
  );
};

export default MainView;

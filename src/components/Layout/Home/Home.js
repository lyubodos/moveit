import { Fragment } from "react";
import Hero from "./Hero/Hero";

import movieCover from "../../../assets/movie-cover.jpeg";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.home}>
      <img
        className={classes["main-image"]}
        src={movieCover}
        alt="movie-cover"
      />
      <Hero />
    </div>
  );
}

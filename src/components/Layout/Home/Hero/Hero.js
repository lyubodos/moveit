import React from 'react';

import classes from "../Home.module.css";



export default function Hero() {
  return (
    <section className={classes.hero}>
    <h2>Always the best of movies for every occasion and mood!</h2>
    <p>
      Choose your favorite movie from our broad selection of available movies
      and sit back on your coach or sofa , and enjoy the show!.
    </p>
    <p>
      Each of the presented movies are licensed and reviewed by our movie experts!
    </p>
  </section>
  )
}

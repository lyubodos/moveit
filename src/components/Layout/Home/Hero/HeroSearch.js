import React from 'react';
import Button from '../../../UI/Button/Button';

import classes from "./HeroSearch.module.css";

export default function HeroSearch() {
  return (
    <section className={classes.search_container}>
        <div >
            <h1>Search for Your favorite Movie!</h1>
            <form className={classes.search_form}>
                <label htmlFor='searchH'>Movie:</label>
                <input id="searchH" />
                <Button>Search</Button>
            </form>
        </div>
    </section>
  )
}

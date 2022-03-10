import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';

import classes from "./Header.module.css";

export default function Header() {
  return (
        <header className={classes.header}>
            <Link to="/">
                <div><h1>MoveIt</h1></div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
                <Button>Login</Button>
            </nav>
        </header>
  )
}

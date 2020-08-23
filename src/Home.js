import React from 'react';
import './Home.css';
import Hero from './hero.jpg';
function Home() {
    return (
        <div className="home">

            <img className="home__img" src={Hero} alt="hoimg" />
            
            <h1>NAWAB PHOTO STATE</h1>
        </div>
    )
}

export default Home

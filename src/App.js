import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from 'axios';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import ItemCarousel from "./components/ItemCarousel";
import { VerticalCard, VerticalSettings } from "./components/Layouts/Cards/VerticalCard";
import { HorizontalCard, HorizontalSettings } from "./components/Layouts/Cards/HorizontalCard";

export default function App() {

  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);

  useEffect(() => {
    /** Fetch movies and tv series from omdb search api */
    axios.get(`http://www.omdbapi.com/?apikey=38fdd212&s=game%20of%20thrones&series=series`)
      .then(response => {
        setMovies1(response.data.Search);
      });
    
      /** Fetch movies and tv series from omdb search api */
    axios.get(`http://www.omdbapi.com/?apikey=38fdd212&s=lord%20of%20rings`)
    .then(response => {
      setMovies2(response.data.Search);
    });
  }, [])



  return (
    <section className="container mx-auto px-4">
      <div className="my-4">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl">Vertical cards</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">Vertical cards with react slick carousel</p>
        <div className="py-10">
          <ItemCarousel settings={VerticalSettings}>
            {
              movies1.map((movie) => {
                return (
                  <Card content={VerticalCard(movie)} />
                )
              })
            }
          </ItemCarousel>
        </div>
        <h1 class="my-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl">Horizontal cards</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">Horizontal cards with react slick carousel</p>
        <div className="py-10">
          <ItemCarousel settings={HorizontalSettings}>
            {
              movies2.map((movie) => {
                return (
                  <Card content={HorizontalCard(movie)} />
                )
              })
            }
          </ItemCarousel>
        </div>
      </div>

    </section>

  )
}
import React from 'react'
import { useState } from 'react';
// component
import HeroCarousel from '../components/hero_carousel/HeroCarousel';
import EntertainmentCard from '../components/entertainment/EntertainmentCard';
import PosterSlider from '../components/poster_slider/PosterSlider';
// layoutHoc
import DefaultLayoutHoc from '../layouts/DefaultLayout';


const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMoves] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarousel />
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The best of Entertainment</h1>
        <EntertainmentCard />
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
          title='Recommended Movies'
          subject='List of Recommended Movies'
          posters={recommendedMovies}
          isDark={false} />
      </div>

      <div className='bg-premier-800'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className='h-full w-full' />
          </div>
          <PosterSlider
            title='Premier Movies'
            subject='Brand new releases every Friday'
            posters={premierMovies}
            isDark={true} />
        </div>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
          title='Online Streaming Events'
          subject=''
          posters={onlineStreamEvents}
          isDark={false} />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
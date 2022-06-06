import React from 'react';
import ProfilePicture from '../assets/images/profile.jpg';
import { Arrow } from '../components/Arrow';

export const Header = () => {
  return (
    <div className="text-text-light h-screen w-5/6 m-auto text-center font-montserrat font-bold py-[15vh]">
      <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl">
        Marco Barreto
      </h1>
      <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl my-8 font-medium">
        Fullstack Web Developer
      </h3>
      <img
        src={ProfilePicture}
        alt="profile"
        className="m-auto my-40 lg:w-44 md:w-40 sm:w-36 w-32"
        style={{ borderRadius: '25% 75% 25% 75% / 69% 23% 77% 31%' }}
      />
      <Arrow />
    </div>
  );
};

import React from 'react';
import ProfilePicture from '../assets/images/profile.jpg';
export const Introduction = () => {
  return (
    <div className="flex justify-between w-1/2 m-auto items-center my-12">
      <img
        src={ProfilePicture}
        alt="profile"
        className="m-auto lg:w-44 md:w-40 sm:w-36 w-32 "
        style={{ borderRadius: '25% 75% 25% 75% / 69% 23% 77% 31%' }}
      />
      <p className="w-3/5 mx-auto">
        Hello! My name is Marco Barreto and I'm a Front-end Software Engineer
        aspiring to become a Full-stack Developer. <br />I have over 3 years of
        software development, currently working on{' '}
        <a className="underline" href="https://avantsoft.com.br/">
          Avantsoft
        </a>{' '}
        developing apps using React and React Native. Skilled in JavaScript,
        React, React Native and NodeJS.
      </p>
    </div>
  );
};

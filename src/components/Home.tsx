import { Line } from './Line';
import { About } from './About';
export const Home = () => {
  return (
    <div className="text-text-light h-screen m-auto text-center font-montserrat font-bold py-[5vh] bg-secondary">
      <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl">About me</h1>
      <Line />
      <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-thin italic">
        Who am I?
      </h2>

      <About />
    </div>
  );
};

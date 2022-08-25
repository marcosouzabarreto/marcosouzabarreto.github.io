import { Arrow } from '../components/Arrow';

export function Header() {
  return (
    <div className="text-text-light h-screen m-auto text-center font-montserrat font-bold flex flex-col bg-primary">
      <div className="flex justify-center flex-col h-full">
        <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl ">
          Marco Barreto
        </h1>
        <h3 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl my-4 font-medium">
          Front-end Software Engineer
        </h3>
      </div>

      <div className="absolute self-center bottom-8">
        <Arrow />
      </div>
    </div>
  );
}

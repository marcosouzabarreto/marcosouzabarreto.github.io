import { RocketLaunch, Gauge, Gear, FrameCorners } from 'phosphor-react';

type Props = {
  iconName: 'rocket' | 'screen' | 'gear' | 'gauge';
  text?: string;
  title?: string;
};

const icons = {
  rocket: <RocketLaunch width={'70%'} height={'70%'} color={'#d9d9d9'} />,
  screen: <FrameCorners width={'70%'} height={'70%'} color={'#d9d9d9'} />,
  gauge: <Gauge width={'70%'} height={'70%'} color={'#d9d9d9'} />,
  gear: <Gear width={'70%'} height={'70%'} color={'#d9d9d9'} />,
};

export const CodePrinciple = (props: Props) => {
  return (
    <div className="inline-flex flex-col justify-center items-center max-w-[250px]">
      <div
        className="w-20 h-20 bg-black items-center justify-center flex"
        style={{ borderRadius: '30% 30% 30% 30% / 40% 40% 40% 40%' }}
      >
        {icons[props.iconName]}
      </div>
      <h3 className="text-2xl my-2">Efficient</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
        corporis ipsum{' '}
      </p>
    </div>
  );
};

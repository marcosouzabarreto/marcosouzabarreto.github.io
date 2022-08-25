import { CodePrinciple } from './CodePrinciple';

export const MyInfo = () => {
  return (
    <div className="flex-col flex px-28">
      <div className="grid grid-cols-2 w-1/2 gap-3">
        <CodePrinciple iconName="gauge" />
        <CodePrinciple iconName="rocket" />
      </div>
    </div>
  );
};

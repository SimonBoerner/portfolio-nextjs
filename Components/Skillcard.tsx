type SkillcardProps = {
  icon: any;
  name: string;
};

const Skillcard = ({ icon, name }: SkillcardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-[30%] drop-shadow-lg bg-accentblue text-white transition duration-500 ease-in-out 
    transform 
    hover:-translate-y-1 hover:scale-105 
    rounded-md p-4 "
    >
      <div className="py-3">{icon}</div>
      <div className="pb-3">{name}</div>
    </div>
  );
};

export default Skillcard;

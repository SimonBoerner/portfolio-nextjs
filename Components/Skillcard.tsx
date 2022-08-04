type SkillcardProps = {
  icon: any;
  name: string;
};

const Skillcard = ({ icon, name }: SkillcardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center border-solid border-black w-[30%] bg-accentblue text-white transition duration-500 ease-in-out 
    bg-green-300 hover:bg-green-600 transform 
    hover:-translate-y-1 hover:scale-105 
    rounded-md p-4 border border-green-900"
    >
      <div className="py-3">{icon}</div>
      <div className="pb-3">{name}</div>
    </div>
  );
};

export default Skillcard;

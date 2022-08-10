type SkillcardProps = {
  icon: any;
  name: string;
};

const Skillcard = ({ icon, name }: SkillcardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-[30%] drop-shadow-lg bg-accentblue text-white rounded-md p-4 hover:bg-opacity-90 ">
      <div className="py-3">{icon}</div>
      <div className="pb-3">{name}</div>
    </div>
  );
};

export default Skillcard;

import { useState } from "react";

type SkillcardProps = {
  icon: any;
  name: string;
  description?: string;
};

const Skillcard = ({ icon, name, description }: SkillcardProps) => {
  const [showHoverText, setShowHoverText] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowHoverText(true)}
      onMouseLeave={() => setShowHoverText(false)}
      className="flex flex-col items-center justify-center w-[30%] drop-shadow-lg bg-accentblue/60 text-white rounded-md p-4 hover:bg-opacity-90 hover:scale-105 transition-transform "
    >
      <>
        <div className="py-3">{icon}</div>
        <div className="pb-3">{name}</div>
      </>
    </div>
  );
};

export default Skillcard;

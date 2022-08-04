type ProjectCardProps = {
  projectname: string;
  description: string;
};

const ProjectCard = ({ projectname, description }: ProjectCardProps) => {
  return (
    <div className="flex justify-center">
      <div className="border border-solid w-11/12 text-white flex flex-col items-center justify-center">
        <iframe
          src="https://github.com/devhausleipzig/garden-share.git"
          width={90}
        ></iframe>
        <h3>{projectname}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

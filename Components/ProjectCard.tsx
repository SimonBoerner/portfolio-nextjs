import Image from "next/image";

type ProjectCardProps = {
  projectname: string;
  description: string;
  picUrl: string;
  width: string;
  height: string;
  layout: "fixed" | "fill" | "intrinsic" | "responsive" | undefined;
};

const ProjectCard = ({
  projectname,
  description,
  picUrl,
  width,
  height,
  layout,
}: ProjectCardProps) => {
  return (
    <div className="flex justify-center items-center pb-8">
      <div className="border border-solid w-11/12 text-white flex">
        <div className="flex flex-col">
          <h2 className="text-xl text-left pb-3">{projectname}</h2>
          <p>{description}</p>
        </div>
        <div>
          <Image
            src={picUrl}
            layout="responsive"
            width="1920"
            height="1440"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

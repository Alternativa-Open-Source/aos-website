import Image from "next/image";

export function ProjectImage({ project, width, height }) {
  const logoUrl = project.yaml.logo;
  if (logoUrl.endsWith(".svg")) {
    return <img src={logoUrl} width={width} height={height} />;
  }

  return <Image src={logoUrl} alt={project.yaml.name} width={width} height={height} className="rounded-lg" />;
}

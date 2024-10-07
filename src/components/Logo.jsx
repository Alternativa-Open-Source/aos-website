import Image from "next/image";

export function Logo(props) {
  return <Image src="/alternativa-open-source-logo.svg" width={210} height={55} alt="Alternativa Open Source Logo" {...props} />;
}

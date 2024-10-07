import { getPaidToolUrlBySlug } from "@/lib/client-urls";
import { joining } from "@/utils/arrayUtils";
import { elegantNameParser } from "@/utils/textUtils";
import Link from "next/link";

export function ProjectAlternatives({ project }) {
  return (
    <>
      {project.yaml.name} é um projeto open-source, ou de <b>código aberto </b>
      que serve como alternativa para as seguintes ferramentas:{" "}
      {project.yaml.alterantiveTo
        .map((alternative) => (
          <Link key={alternative} href={getPaidToolUrlBySlug(alternative)} className="text-gray-900 hover:underline">
            <span>{elegantNameParser(alternative)}</span>
          </Link>
        )) //
        .reduce(joining, [])}
      {"."}
    </>
  );
}

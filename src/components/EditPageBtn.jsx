import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ExternalLink, Pencil, ShieldQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EditPageBtn({ project, variant }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant}>
          <Pencil className="h-5 w-5 m-2 text-gray-500" /> Editar essa página
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <a href={project.sourceEditUrl} target="_blank" className="cursor-pointer">
            <ExternalLink className="mr-2 h-4 w-4" /> Editar no github
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/como-editar-paginas" className="cursor-pointer">
            <ShieldQuestion className="mr-2 h-4 w-4" /> Como editar páginas
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

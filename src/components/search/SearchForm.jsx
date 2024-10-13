"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SearchForm() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const type = searchParams.get("type") || "all";

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputs = Object.fromEntries(formData);
    router.push(`/search?query=${inputs.query}&type=${inputs.type}`);
  };

  return (
    <div className="w-full p-8 rounded-2xl bg-[#556B2F] text-white">
      <h2 className="text-3xl font-bold text-center mb-4">Buscar Projetos Open-Source </h2>
      <p className="text-center mb-8 text-indigo-100">
        Encontre a ferramenta de código aberto perfeita para suas necessidades <br />
        (busque por nome do projeto, categoria ou ferramenta alternativa)
      </p>
      <form onSubmit={handleSearch}>
        <div className="flex items-center bg-white rounded-lg overflow-hidden p-1 text-black">
          <Select name="type" defaultValue={type}>
            <SelectTrigger className="w-[180px] border-none focus:ring-0">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Busca global</SelectItem>
              <SelectItem value="projects">Projetos Open Source</SelectItem>
              <SelectItem value="categories">Categorias</SelectItem>
              <SelectItem value="alternatives">Ferramentas SASS</SelectItem>
            </SelectContent>
          </Select>
          <Input name="query" type="text" placeholder="Search open-source projects or alternatives" className="flex-grow border-none focus:ring-0 text-gray-900" defaultValue={query} />
          <Button type="submit" className="px-6 py-2 rounded-lg">
            <Search className="w-5 h-5 mr-2" />
            <span className="hidden md:block">Search</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

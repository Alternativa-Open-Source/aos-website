"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SearchForm() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const type = searchParams.get("type") || "all";

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputs = Object.fromEntries(formData);
    router.push(`?query=${inputs.query}&type=${inputs.type}`);
  };

  return (
    <div className="w-full p-8 rounded-2xl bg-indigo-500 text-white">
      <h1 className="text-3xl font-bold text-center mb-4">Find the perfect domain name</h1>
      <p className="text-center mb-8 text-indigo-100">
        Enter your select domain name and choose any extension name in the next step
        <br />
        (choose between .com, .online, .tech, .site, .net, and more)
      </p>
      <form onSubmit={handleSearch}>
        <div className="flex items-center bg-white rounded-lg overflow-hidden p-1 text-black">
          <Select name="type" defaultValue={type}>
            <SelectTrigger className="w-[180px] border-none focus:ring-0">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Busca global</SelectItem>
              <SelectItem value="projects">Open Source Projects</SelectItem>
              <SelectItem value="alternatives">Alternatives to</SelectItem>
            </SelectContent>
          </Select>
          <Input name="query" type="text" placeholder="Search open-source projects or alternatives" className="flex-grow border-none focus:ring-0 text-gray-900" defaultValue={query} />
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

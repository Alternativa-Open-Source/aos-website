import { Badge } from "./ui/badge";
import Link from "next/link";
import { getCategoryUrlBySlug } from "@/lib/client-urls";
import { slugify } from "@/utils/textUtils";

export function ProjectCategories({ categories }) {
  return (
    <>
      {categories &&
        categories.map((category) => {
          const categSlug = slugify(category);

          return (
            <Badge key={category} variant="secondary" className="text-xs mr-2">
              <Link href={getCategoryUrlBySlug(categSlug)}>{category}</Link>
            </Badge>
          );
        })}
    </>
  );
}

import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryUrlBySlug } from "@/lib/client-urls";

export function CategoryCard({ category }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-row gap-4 items-center">
        <div>
          <CardTitle className="text-2xl">
            <Link href={getCategoryUrlBySlug(category.slug)}>Alternativa open source para {category.name}</Link>
          </CardTitle>
        </div>
      </CardHeader>
    </Card>
  );
}

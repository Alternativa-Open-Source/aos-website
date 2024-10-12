import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAlternativeToUrlBySlug } from "@/lib/client-urls";

export function AlternativeToCard({ alternativeTo }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-row gap-4 items-center">
        <div>
          <CardTitle className="text-2xl">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-600 text-2xl font-semibold">{alternativeTo.name[0]}</span>
              </div>
              <Link href={getAlternativeToUrlBySlug(alternativeTo.slug)}>{alternativeTo.name}</Link>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-muted-foreground mb-4">{alternativeTo.headlight}</p>
      </CardContent>
    </Card>
  );
}

import { CategoryCard } from "@/components/CategoryCard";
import { Container } from "@/components/Container";
import { listCategories } from "@/lib/data/categories";

export default async function CategoryListPage() {
  const categories = await listCategories();

  return (
    <section className="border-t border-gray-200 py-10 sm:py-14">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">Categorias</h1>
          <p className="mt-2 text-lg text-gray-600">
            Nesta página você todas as categorias de alternativas <b>open-sorce</b>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
          {categories &&
            categories.length > 0 &&
            categories.map((category, index) => {
              return <CategoryCard key={index} category={category} />;
            })}
        </div>
      </Container>
    </section>
  );
}

import { listCategories, readCategory } from "@/lib/data/categories";

export async function generateStaticParams() {
  const categories = await listCategories();
  console.log(categories);
  return categories;
}

export default async function CategoryPage({ params }) {
  const slug = params.slug;
  const category = await readCategory(slug);

  return (
    <>
      <h1>{category.name}</h1>
      <div>My Post: {slug}</div>
      <div>headlight: {category.generatedAt}</div>

      <div>
        Projects:
        <ul>{category.projects && category.projects.map((el) => <li key={el}>{el}</li>)}</ul>
      </div>
    </>
  );
}

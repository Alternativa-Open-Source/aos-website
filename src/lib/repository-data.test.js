import { getRepoData, parseProvider } from "@/lib/repository-data";

describe("repository-data", () => {
  it("should parse github repository -> github supabase/supabase", () => {
    const parsed = parseProvider("github supabase/supabase");
    expect(parsed?.provider).toBe("github");
    expect(parsed?.projectId).toBe("supabase/supabase");
  });

  it("should parse github repository -> github postman", () => {
    const parsed = parseProvider("github postman fdsakjfsda");
    expect(parsed?.provider).toBe("github");
    expect(parsed?.projectId).toBe("postman");
  });

  it("should fetch github supabase/supabase", async () => {
    const data = await getRepoData("github supabase/supabase");

    expect(data.license).toBe("Apache License 2.0");
    expect(data.language).toBe("TypeScript");
    expect(data.sourceUrl).toBe("https://github.com/supabase/supabase");
    expect(data.stargazers).toBeGreaterThan(0);
    expect(data.size).toBeGreaterThan(0);
    expect(data.forks).toBeGreaterThan(0);
    expect(data.issues).toBeGreaterThan(0);
    expect(data.generatedAt).toBeDefined();
  });
});

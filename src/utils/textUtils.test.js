import { replaceAccentMarks, slugify } from "@/utils/textUtils";

describe("slugify", () => {
  it("should convert a string to lowercase and replace spaces with hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("should remove special characters", () => {
    expect(slugify("Hello@World!")).toBe("helloworld");
  });

  it("should trim leading and trailing spaces", () => {
    expect(slugify("   Hello World   ")).toBe("hello-world");
  });

  it("should replace multiple spaces with a single hyphen", () => {
    expect(slugify("Hello    World")).toBe("hello-world");
  });

  it("should replace multiple hyphens with a single hyphen", () => {
    expect(slugify("Hello---World")).toBe("hello-world");
  });

  it("should return an empty string if input is an empty string", () => {
    expect(slugify("")).toBe("");
  });

  it("should handle non-alphanumeric characters and preserve numbers", () => {
    expect(slugify("Hello World 123")).toBe("hello-world-123");
  });

  it("should return a slug with only hyphens if input is only spaces", () => {
    expect(slugify("    ")).toBe("");
  });

  it("should not remove valid characters", () => {
    expect(slugify("Next.js is awesome")).toBe("next-js-is-awesome");
  });

  it("should remove accent marks", () => {
    expect(slugify("api-Tesťãô")).toBe("api-testao");
  });
});

describe("replaceAccentMarks", () => {
  it("should replace ", () => {
    expect(replaceAccentMarks("ÀéîôüçÑ-Romeo&Juliet")).toBe("AeioucN-Romeo e Juliet");
  });
})

import React from "react";

export const slugify = (text) => {
  const unAccent = replaceAccentMarks(text)
  return unAccent
    .toString()
    .toLowerCase()
    .trim()
    .replace(".", "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const elegantNameParser = (text) => {
  return text
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const parseDateBr = (dateStr) => {
  if (!dateStr) {
    return "";
  }

  const date = new Date(dateStr);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getUTCFullYear();

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const NewLineToBreakLine = (str) => {
  const lines = str.split("\n");

  return (
    <>
      {lines
        .filter((el) => el)
        .map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
    </>
  );
};

export const replaceAccentMarks = (str, regex = /[^\w.\- ]/g) => {
  return (
    str
      // a
      .replace(/à|á|â|ä|æ|ã|å|ā/g, "a")
      // e 
      .replace(/è|é|ê|ë|ē|ė|ę/g, "e")
      .replace(/&/g, " e ") // Romeo&Juliet -> romeo-e-juliet
      // i
      .replace(/î|ï|í|ī|į|ì/g, "i")
      // o
      .replace(/ô|ö|ò|ó|œ|ø|ō|õ/g, "o")
      // u
      .replace(/û|ü|ù|ú|ū/g, "u")
      // c
      .replace(/ç|ć|č/g, "c")
      // l
      .replace(/ł/g, "l")
      // n
      .replace(/ñ|ń/g, "n")
      // s
      .replace(/ß|ś|š/g, "s")
      // t
      .replace(/ț|ť|þ/g, "t")
      // z
      .replace(/ž|ź|ż/g, "z")
      // A
      .replace(/À|Á|Â|Ä|Æ|Ã|Å|Ā/g, "A")
      // E
      .replace(/È|É|Ê|Ë|Ē|Ė|Ę/g, "E")
      .replace(/&/g, " E ") // Romeo&Juliet -> romeo-e-juliet
      // I
      .replace(/Î|Ï|Í|Ī|Į|Ì/g, "I")
      // O
      .replace(/Ô|Ö|Ò|Ó|Œ|Ø|Ō|Õ/g, "O")
      // U
      .replace(/Û|Ü|Ù|Ú|Ū/g, "U")
      // C
      .replace(/Ç|Ć|Č/g, "C")
      // L
      .replace(/Ł/g, "L")
      // N
      .replace(/Ñ|Ń/g, "N")
      // S
      .replace(/Ś|Š/g, "S")
      // Z
      .replace(/Ž|Ź|Ż/g, "Z")
      // Remove any unwanted characters based on the regex
      .replace(regex, "")
  );
};

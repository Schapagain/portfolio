import React from "react";

import { db } from "~/utils/db.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Underline from "~/components/Underline";
import Navigation from "~/components/Navigation";

export const loader = async () => {
  return json({
    books: await db.book.findMany({
      select: {
        id: true,
        isbn: true,
        isbn13: true,
        title: true,
        tags: true,
        coverImage: true,
      },
    }),
  });
};

function titleCase(str = "", delimiter = "-") {
  return str
    .split(delimiter)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function getSectionHeadingFromTag(tag) {
  const map = {
    funtasies: "Fantasy",
    "1q84": "Dystopic Fiction",
    philosophical: "Philosophy",
  };
  return map[tag] || titleCase(tag);
}

function findCommonElements(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

export default function Library() {
  const data = useLoaderData();
  const books = data.books;
  const sections = [
    "currently-reading",
    "favorites",
    "philosophical",
    "funtasies",
    "1q84",
    "sciency",
    "others",
  ];
  return (
    <div className="w-full flex flex-col relative px-5 pt-24 md:pt-32 lg:pt-40">
      <Navigation type="fixed" tooltip="bottom" />
      <h1 className="text-center text-subTitle">
        A lot of my time is spent with books, and I enjoy reading anything and
        everything.
      </h1>
      {sections.map((section) => (
        <Section
          key={section}
          title={getSectionHeadingFromTag(section)}
          books={books.filter((book) => {
            const tags = book.tags && book.tags.split(",");
            if (section === "others") {
              return !tags || findCommonElements(sections, tags).length === 0;
            } else return tags && tags.includes(section);
          })}
        />
      ))}
    </div>
  );
}

function Book(book) {
  return (
    <div
      title={book.title}
      className="py-5 px-3 max-w-sm flex flex-col items-center"
    >
      <a
        target="_blank"
        rel="noopener"
        href={`https://app.thestorygraph.com/browse?search_term=${
          book.isbn13 || book.isbn || ""
        }`}
      >
        <div className="w-28">
          <CoverImage url={book.coverImage} title={book.title} />
          <p className="text-xs text-center mt-1.5 line-clamp-2">
            {book.title}
          </p>
        </div>
      </a>
    </div>
  );
}

function CoverImage({ url, title = "book" }) {
  return (
    <div className="aspect-h-3 aspect-w-2 overflow-hidden">
      <img
        loading="lazy"
        className="block w-full h-auto"
        src={url}
        alt={`${title} cover`}
      />
    </div>
  );
}

function Section({ title, books }) {
  return (
    <div className="py-12" id={(title || "").toLowerCase()}>
      {title && (
        <div className="flex flex-col mx-auto items-center w-full md:w-3/4">
          <h2 className="text-center text-2xl xl:text-3xl font-['Cinzel']">
            {title}
          </h2>
          <Underline className="w-44" />
        </div>
      )}

      <div className="w-full flex flex-wrap justify-center">
        {books.map((book) => (
          <Book
            key={book.id || book.isbn || book.isbn13}
            {...book}
            tags={book.tags ? book.tags.split(",") : []}
          />
        ))}
      </div>
    </div>
  );
}

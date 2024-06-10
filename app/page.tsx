import Link from "next/link";
import React from "react";

export default function page() {
  const allMov = `
  [
  {
    "id": "66574de6588938529cc66c38",
    "title": "King Cong vs Godzilla Updated",
    "thumbnail": "https://i.ytimg.com/vi/sgnRFpzOKa4/maxresdefault.jpg",
    "trailer": "https://www.youtube.com/watch?v=sgnRFpzOKa4&ab_channel=Legendary",
    "downloadLink": "http://localhost:3000/api/movies",
    "categoryId": "66574c95588938529cc66c36"
  }, {
    "id": "66574de6588938529cc66c38",
    "title": "King Cong vs Godzilla Updated",
    "thumbnail": "https://i.ytimg.com/vi/sgnRFpzOKa4/maxresdefault.jpg",
    "trailer": "https://www.youtube.com/watch?v=sgnRFpzOKa4&ab_channel=Legendary",
    "downloadLink": "http://localhost:3000/api/movies",
    "categoryId": "66574c95588938529cc66c36"
  }]
  `;
  const body = `
{
  "id": "66574de6588938529cc66c38",
  "title": "King Cong vs Godzilla Updated",
  "thumbnail": "https://i.ytimg.com/vi/sgnRFpzOKa4/maxresdefault.jpg",
  "trailer": "https://www.youtube.com/watch?v=sgnRFpzOKa4&ab_channel=Legendary",
  "downloadLink": "http://localhost:3000/api/movies",
  "categoryId": "66574c95588938529cc66c36"
}`;
  const single = `
{
  "id": "66574de6588938529cc66c38",
  "title": "King Cong vs Godzilla Updated",
  "thumbnail": "https://i.ytimg.com/vi/sgnRFpzOKa4/maxresdefault.jpg",
  "trailer": "https://www.youtube.com/watch?v=sgnRFpzOKa4&ab_channel=Legendary",
  "downloadLink": "http://localhost:3000/api/movies",
  "categoryId": "66574c95588938529cc66c36"
}`;
  const allMovieCat = `[
  {
    "id": "66574c95588938529cc66c36",
    "name": "Action",
    "slug": "action"
  }
]`;
  return (
    <div className="max-w-6xl mx-auto p-3">
      <div className="flex justify-between items-center">
        <h1 className="scroll-m-20 text-xl  font-extrabold tracking-tight lg:text-5xl">
          Movies API Endpoints
        </h1>
        <Link
          href="https://coding-school-typescript.vercel.app/"
          className="text-amber-700 font-extrabold"
        >
          {" "}
          Desishub
        </Link>
      </div>
      <div className="py-4">
        <h2 className=" py-4 text-amber-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Get all Movies
        </h2>
        <Link
          href={"https://desishubapi.vercel.app/api/movies"}
          className="mt-4 block p-4 border border-gray-400"
        >
          [GET] https://desishubapi.vercel.app/api/movies
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 py-2">Response</p>
        <div className="mt-4 p-4 border border-gray-400 overflow-hidden rounded-md">
          <pre>
            <code className="relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {allMov}
            </code>
          </pre>
        </div>
      </div>
      <div className="py-4">
        <h2 className=" py-4 text-amber-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Get all Movie Categories
        </h2>
        <Link
          href={"https://desishubapi.vercel.app/api/Categories"}
          className="mt-4 block p-4 border border-gray-400"
        >
          [GET] https://desishubapi.vercel.app/api/Categories
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 py-2">Response</p>
        <div className="mt-4 p-4 border border-gray-400 overflow-hidden">
          <pre>
            <code className="relative rounded-md  bg-muted px-[0.3rem] py-[0.2rem]  font-mono text-sm font-semibold">
              {allMovieCat}
            </code>
          </pre>
        </div>
      </div>
      <div className="py-4">
        <h2 className=" py-4 text-amber-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Get a single Movie
        </h2>
        <Link
          href={
            "https://desishubapi.vercel.app/api/movies/66574de6588938529cc66c38"
          }
          className="mt-4 p-4 block border border-gray-400"
        >
          [GET] https://desishubapi.vercel.app/api/movies/[id]
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 py-2">Response</p>
        <div className="mt-4 p-4 border border-gray-400 overflow-hidden ">
          <pre>
            <code className="relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {single}
            </code>
          </pre>
        </div>
      </div>
      <div className="py-4">
        <h2 className=" py-4 text-amber-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Create a Movie
        </h2>
        <Link
          href={"https://desishubapi.vercel.app/api/movies/"}
          className="mt-4 block p-4 border border-gray-400"
        >
          [POST] https://desishubapi.vercel.app/api/movies
        </Link>
        <p className="leading-7 [&:not(:first-child)]:mt-6 py-2">Body</p>
        <div className="mt-4 p-4 border border-gray-400 rounded-md overflow-hidden">
          <pre>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {body}
            </code>
          </pre>
        </div>
      </div>
      <div className="py-4">
        <h2 className=" py-4 text-amber-700 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Delete a Movie
        </h2>
        <Link
          href={"https://desishubapi.vercel.app/api/movies"}
          className="mt-4 block p-4 border border-gray-400"
        >
          [DELETE] https://desishubapi.vercel.app/api/movies[id]
        </Link>
      </div>
    </div>
  );
}

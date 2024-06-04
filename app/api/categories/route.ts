import { db } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { slug, name } = await request.json();
    // console.log(slug, name);

    const newMovieCategory = await db.movieCategory.create({
      data: {
        slug: slug,
        name: name,
      },
    });
    console.log(newMovieCategory);
    return NextResponse.json(newMovieCategory);
  } catch (error) {
    // console.log(error);
  }
}

export async function GET(request: Request) {
  try {
    const allMovieCategories = await db.movieCategory.findMany();
    // console.log(allMovies);
    return NextResponse.json(allMovieCategories);
  } catch (error) {
    console.log(error);
  }
}

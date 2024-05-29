import { db } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, thumbnail, categoryId, trailer, downloadLink } =
    await request.json();
  // console.log(title, thumbnail, categoryId, trailer, downloadLink);
  try {
    const newMovie = await db.movie.create({
      data: {
        title: title,
        thumbnail: thumbnail,
        categoryId: categoryId, 
        trailer: trailer,
        downloadLink: downloadLink,
      },
    });
    // console.log(newMovie);
    return NextResponse.json(newMovie);
  } catch (error) {
    console.error("Error creating movie:", error);
    return NextResponse.json(
      { error: "Failed to create movie" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const allMovies = await db.movie.findMany();
    // console.log(allMovies);
    return NextResponse.json(allMovies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await request.json();
    const allMovies = await db.movie.deleteMany();
    return NextResponse.json(allMovies);
  } catch (error) {
    console.log(`Error deleting movies: ${error}`);
  }
}

import { db } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params: { id } }: any) {
  try {
    const movie = await db.movie.findUnique({
      where: {
        id,
      },
    });
    console.log(`Got back the following movie: ${movie}`);
    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json({
      error: "Something Went wrong, Failed to get back a single movie",
    });
  }
}

export async function PUT(request: Request, { params: { id } }: any) {
  // console.log(id)
  try {
    const { title, thumbnail, category, trailer, downloadLink } =
      await request.json();

    const data = {
      title: title,
      thumbnail: thumbnail,
      category: category,
      trailer: trailer,
      downloadLink: downloadLink,
    };

    const updatedMvie = await db.movie.update({
      data,
      where: {
        id,
      },
    });
    console.log(`Updated The Following Movie: ${updatedMvie}`);
    return NextResponse.json(updatedMvie);
  } catch (error) {
    return NextResponse.json({
      error: "Something Went wrong, failed to Update Movie",
    });
  }
}

export async function DELETE(request: Request, { params: { id } }: any) {
  // console.log(id)
  try {
    const movie = await db.movie.delete({
      where: {
        id,
      },
    });
    //   console.log(movie)
    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json({
      error: "Something Went wrong, Failed to delete a Movie",
    });
  }
}

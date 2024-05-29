import { db } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params: { id } }: any) {
  // console.log(id)
  try {
    const category = await db.movieCategory.findUnique({
      where: {
        id,
      },
    });
    //   console.log(category)
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({
      error: "Something Went wrong, Failed to get back a category",
    });
  }
}

export async function PUT(request: Request, { params: { id } }: any) {
  // console.log(id)
  try {
    const { slug, name } = await request.json();

    const data = {
      name: name,
      slug: slug,
    };

    const updatedCategory = await db.movieCategory.update({
      data,
      where: {
        id,
      },
    });
    // console.log(`Updated Category: ${updatedCategory}`);
    return NextResponse.json(updatedCategory);
  } catch (error) {
    return NextResponse.json({
      error: "Something Went wrong, failed to Update Category",
    });
  }
}

export async function DELETE(request: Request, { params: { id } }: any) {
  // console.log(id)
  try {
    const deletedCategory = await db.movieCategory.delete({
      where: {
        id,
      },
    });
    // console.log(`Deleted The Following Category: ${deletedCategory}`);
    return NextResponse.json(deletedCategory);
  } catch (error) {
    return NextResponse.json({
      error: "Something Went wrong, Failed to delete category",
    });
  }
}

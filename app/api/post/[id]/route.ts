import prismadb from "@/libs/prismadb";
import { NextResponse } from "next/server";

type Param = { params: { id: string } };

export async function PATCH(request: Request, { params }: Param) {
  try {
    const { id } = params;
    const { title, content } = await request.json();
    const post = await prismadb.post.update({
      where: { id },
      data: { title, content },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error: any) {
    console.log("POST_PATCH_ERROR", error);
    return NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}

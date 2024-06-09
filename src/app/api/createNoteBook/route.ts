import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();
  console.log({ userId });
  if (!userId) {
    return new NextResponse("unauthorized", { status: 401 });
  }
  const body = await req.json();
  console.log("body", body);
  const { name } = body;
  const note_ids = await db
    .insert($notes)
    .values({
      name,
      userId,
      imageUrl: "image_url",
    })
    .returning({
      insertedId: $notes.id,
    });

  return NextResponse.json({
    note_id: note_ids[0].insertedId,
  });
}

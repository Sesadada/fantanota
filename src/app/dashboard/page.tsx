import CreateNoteDialog from "@/components/CreateNoteDialog";
import UserPosts from "@/components/UserPosts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { UserButton, auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export type Note = {
  id: number;
  name: string;
  createdAt: string; // Ensure this matches the string type expected in your component
  imageUrl: string | null;
  userId: string;
  editorState: string | null;
};
const DashboardPage = async (props: Props) => {
  const { userId } = auth();

  const notes = await db
    .select()
    .from($notes)
    .where(eq($notes.userId, userId!));

  const formattedNotes = notes.map((note) => ({
    ...note,
    createdAt: note.createdAt.toISOString(), // Convert Date to string
  }));

  return (
    <>
      <div className="grainy min-h-screen">
        <div className="max-w-7xl mx-auto p-10">
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex items-center">
              <Link href="/">
                <Button>Dashboard</Button>
              </Link>
              <div className="w-4"></div>
              <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">
                My Notes
              </h1>
              <div className="w-4"></div>
              <UserButton />
            </div>
          </div>

          <div className="h-8"></div>
          <Separator />
          <div className="h-8"></div>

          {formattedNotes.length === 0 && (
            <div className="text-center">
              <h2 className="text-xl text-gray-500">You have no notes yet.</h2>
            </div>
          )}

          <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
            <CreateNoteDialog />
            <UserPosts notes={formattedNotes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

/*
 <Image
                      width={400}
                      height={200}
                      alt={note.name}
                      src={note.imageUrl || ""}
                    />

*/

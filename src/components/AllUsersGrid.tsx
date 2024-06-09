"use client";
import React from "react";
import { useRouter } from "next/navigation";

export type Note = {
  id: number;
  name: string;
  createdAt: string; // Ensure this matches the string type expected in your component
  imageUrl: string | null;
  userId: string;
  editorState: string | null;
};

type NotesListProps = {
  notes: Note[];
};

const AllUsersGrid: React.FC<NotesListProps> = ({ notes }) => {
  const router = useRouter();
  router.refresh();
  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          className="border border-stone-300 rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition hover:-translate-y-1"
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900">{note.name}</h3>
            <div className="h-1"></div>
            <p className="text-sm text-gray-500">
              {new Date(note.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllUsersGrid;

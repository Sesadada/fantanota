import TypewriterTitle from "@/components/TypewriterTitle";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { $notes } from "@/lib/db/schema";
import UserPosts from "@/components/UserPosts";
import AllUsersGrid from "@/components/AllUsersGrid";

const Home = async () => {
  const allNotes = await db.select().from($notes);

  const formattedNotes = allNotes.map((note) => ({
    ...note,
    createdAt: note.createdAt.toISOString(), // Convert Date to string
  }));

  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-sky-100 h-screen">
      <div className="flex items-center justify-center h-screen flex-col">
        <h1 className="text-7xl py-2 font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-sky-400">
          Ideas Peep Show
        </h1>
        <div>
          <h3 className="text-2xl my-4 text-center text-slate-600 font-extralight">
            <TypewriterTitle />
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            <AllUsersGrid notes={formattedNotes} />
          </div>
        </div>
        <div className="mt-8">
          <Link href="/dashboard">
            <Button className="bg-sky-500 text-white">
              Go to your stuff
              <ArrowRight className="w-6 h-6 ml-2" stroke="white" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Shell } from "@/components/shell";
import { StreamingList } from "./_components/StreamingList";
import { Suspense } from "react";
import { QestCardSkeleton } from "@/components/cards/QestCardSkeleton";

const Page = () => {
  return (
    <Shell>
      <h1 className="text-3xl font-bold">Streaming</h1>
      <Suspense fallback={<QestCardSkeleton />}>
        <StreamingList />
      </Suspense>
    </Shell>
  );
};

export default Page;

import { Shell } from "@/components/shell";
import QestPubSubList from "./_components/QestList";

const Page = () => {
  return (
    <Shell>
      <h1 className="text-3xl font-bold">Real-time events</h1>
      <QestPubSubList />
    </Shell>
  );
};

export default Page;

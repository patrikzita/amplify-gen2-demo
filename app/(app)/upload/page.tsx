import { UploadImage } from "./_components/UploadImage";

export default async function Page() {
  return (
    <main className="flex min-h-screen gap-8 justify-between p-24">
      <UploadImage />
    </main>
  );
}

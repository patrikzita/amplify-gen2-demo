import { UploadImage } from "./_components/UploadImage";
import UploadImageDropzone from "./_components/UploadImageDropzone";

export default async function Page() {
  return (
    <main className="flex flex-col gap-y-10 p-24">
      <div>
        <h1 className="font-bold text-xl">Amplify component</h1>
        <UploadImage />
      </div>
      <div>
        <h1 className="font-bold text-xl">Custom React-dropzone</h1>
        <UploadImageDropzone />
      </div>
    </main>
  );
}

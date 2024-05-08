import dynamic from "next/dynamic";

const StorageManager = dynamic(() => import("@/components/storage-manager"), {
  ssr: false,
});

export default async function Page() {
  return (
    <main className="flex flex-col gap-y-10 p-24">
      <div>
        <h1 className="font-bold text-xl">Amplify component</h1>
        <StorageManager
          acceptedFileTypes={["image/*"]}
          path="image/"
          maxFileCount={1}
        />
      </div>
      {/*    <div>
        <h1 className="font-bold text-xl">Custom React-dropzone</h1>
        <UploadImageDropzone />
      </div> */}
    </main>
  );
}

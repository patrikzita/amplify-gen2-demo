import StorageManager from "@/components/storage-manager";

export default async function Page() {
  return (
    <main className="flex flex-col gap-y-10 p-24">
      <div>
        <h1 className="font-bold text-xl">Amplify component</h1>
        <StorageManager
          acceptedFileTypes={["image/*"]}
          path="public/"
          maxFileCount={1}
        />
      </div>
      {/* <div>
        <h1 className="font-bold text-xl">Custom React-dropzone</h1>
        <UploadImageDropzone />
      </div> */}
    </main>
  );
}

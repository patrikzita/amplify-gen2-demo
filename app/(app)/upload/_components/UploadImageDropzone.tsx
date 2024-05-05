"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadData } from "aws-amplify/storage";
import { cn } from "@/lib/utils";
/* https://shadcn-extension.vercel.app/docs/file-upload */
function UploadImageDropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async (event) => {
        try {
          console.log(file);
          /*  await uploadData({
            data: reader.readAsArrayBuffer(file),
            path: "media/",
          }); */
        } catch (error) {
          console.log(error);
        }
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div
      id="images"
      {...getRootProps({ className: "dropzone" })}
      className={cn(
        "border-primary-300 focus-visible:outline-primary rounded-lg border border-dashed p-6 text-center",
        {
          "border-stone-300 bg-stone-50": isDragActive,
        }
      )}
    >
      <input {...getInputProps()} />
      <p className="text-primary font-bold">Nahrát soubor</p>
    </div>
  );
}

export default UploadImageDropzone;

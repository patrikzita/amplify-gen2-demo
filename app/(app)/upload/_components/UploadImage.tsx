"use client";

import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

export const UploadImage = () => {
  return (
    <StorageManager
      acceptedFileTypes={["image/*"]}
      path="media/*"
      maxFileCount={1}
      isResumable
    />
  );
};

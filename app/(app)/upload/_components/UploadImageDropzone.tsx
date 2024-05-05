"use client";

import { Button } from "@/components/ui/button";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { DropzoneOptions } from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const CardForm = z.object({
  files: z
    .array(
      z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
        message: "File size must be less than 4MB",
      })
    )
    .max(5, {
      message: "Maximum 5 files are allowed",
    })
    .nullable(),
});

type CardFormType = z.infer<typeof CardForm>;

const FileUploadDropzone = () => {
  const form = useForm<CardFormType>({
    resolver: zodResolver(CardForm),
    defaultValues: {
      files: null,
    },
  });

  const dropzone = {
    multiple: true,
    maxFiles: 3,
    maxSize: 4 * 1024 * 1024,
  } satisfies DropzoneOptions;

  const onSubmit = (data: CardFormType) => {
    toast.success("your message has been sent successfully");
  };

  console.log(form.getValues("files"));

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative w-full grid gap-2 h-12"
      >
        <div
          className={`w-full flex items-start gap-x-2 rounded-md outline outline-1 outline-border px-2 pb-1 ${
            form.watch("files") !== null ? "pt-4" : "pt-2"
          }`}
        >
          <FormField
            control={form.control}
            name="files"
            render={({ field }) => (
              <FormItem className="w-full">
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  dropzoneOptions={dropzone}
                  reSelect={true}
                >
                  <FileInput className="w-full">
                    <div className="flex items-center justify-center h-32 w-full border bg-background rounded-md">
                      <p className="text-gray-400">Drop files here</p>
                    </div>
                  </FileInput>
                  {field.value && field.value.length > 0 && (
                    <FileUploaderContent className="flex items-center flex-row gap-2">
                      {field.value.map((file, i) => (
                        <FileUploaderItem
                          key={i}
                          index={i}
                          aria-roledescription={`file ${i + 1} containing ${
                            file.name
                          }`}
                          className="size-20 p-0 rounded-md overflow-hidden"
                        >
                          <Image
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            height={80}
                            width={80}
                            className="size-20 p-0"
                          />
                        </FileUploaderItem>
                      ))}
                    </FileUploaderContent>
                  )}
                </FileUploader>
              </FormItem>
            )}
          />
        </div>
        {form.formState.errors && (
          <div className="text-destructive text-sm">
            {Object.values(form.formState.errors).map((error) => (
              <p key={error.message}>{error.message}</p>
            ))}
          </div>
        )}
        <Button type="submit" className="h-8 w-fit">
          Send
        </Button>
      </form>
    </Form>
  );
};

export default FileUploadDropzone;

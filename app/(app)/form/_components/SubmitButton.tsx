"use client";

import { LoadingButton } from "@/components/loading-button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <LoadingButton isLoading={pending} type="submit">
      Vytvořit
    </LoadingButton>
  );
}

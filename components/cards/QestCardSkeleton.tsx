import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const QestCardSkeleton = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle>
            <Skeleton className="h-6 w-40" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-24 mt-2" />
          </CardDescription>
        </div>
        <Skeleton className="h-8 w-8" />
      </CardHeader>
    </Card>
  );
};

"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { QestCard } from "@/components/cards/QestCard";
import { ClientQestCard } from "./ClientQestCard";

const client = generateClient<Schema>();

export default function QestPubSubList() {
  const [employees, setEmployees] = useState<Schema["Employee"]["type"][]>([]);

  useEffect(() => {
    const sub = client.models.Employee.observeQuery().subscribe({
      next: ({ items }) => {
        setEmployees([...items]);
      },
    });

    return () => sub.unsubscribe();
  }, []);

  return (
    <div className="flex gap-3 flex-wrap">
      {employees.map((employee) => (
        <ClientQestCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

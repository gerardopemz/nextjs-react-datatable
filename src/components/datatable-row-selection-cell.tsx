"use client";

import { Row } from "@tanstack/react-table";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface DatatableRowSelectionCellProps<TData> {
  row: Row<TData>;
}

export default function DatatableRowSelectionCell<TData>({
  row,
}: DatatableRowSelectionCellProps<TData>) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  );
}

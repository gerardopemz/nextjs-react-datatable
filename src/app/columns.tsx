"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { User } from "./users";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DatatableColumnHeader from "@/components/datatable-column-header";
import DatatableRowSelectionHeader from "@/components/datatable-row-selection-header";
import DatatableRowSelectionCell from "@/components/datatable-row-selection-cell";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => <DatatableRowSelectionHeader table={table} />,
    cell: ({ row }) => <DatatableRowSelectionCell row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DatatableColumnHeader title="Name" column={column} />
    ),
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <a
        href={`mailto:${row.getValue("email")}`}
        className="font-medium text-blue-600 hover:underline"
      >
        {row.getValue("email")}
      </a>
    ),
  },
  {
    id: "company",
    accessorKey: "company.name",
    header: "Company",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() =>
              navigator.clipboard.writeText(String(row.original.id))
            }
          >
            Copy user ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View user</DropdownMenuItem>
          <DropdownMenuItem>View company</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

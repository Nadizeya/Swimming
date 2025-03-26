import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDown,
  ArrowUp,
  Eye,
  MoreVertical,
  Pencil,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Coach } from "@/features/coaches/coachType";
import { dummyCoaches } from "@/features/coaches/coachData";
import CoachAction from "./components/CoachAction";

const SortableHeader = (column: any, label: string) => (
  <button
    onClick={() => column.toggleSorting()}
    className="flex items-center gap-1"
  >
    {label}
    {column.getIsSorted() === "asc" ? (
      <ArrowUp />
    ) : column.getIsSorted() === "desc" ? (
      <ArrowDown />
    ) : (
      ""
    )}
  </button>
);

export default function CoachList() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<Coach>[] = [
    { accessorKey: "fullName", header: "Full Name" },
    {
      accessorKey: "position",
      header: ({ column }) => SortableHeader(column, "Position"),
    },
    {
      accessorKey: "sex",
      header: ({ column }) => SortableHeader(column, "Sex"),
    },
    {
      accessorKey: "photo",
      header: "Photo",
      cell: ({ row }) => {
        const photo = row.original.photo;
        return photo ? (
          <Button
            variant="link"
            className="p-0 text-blue-600"
            onClick={() => setPhotoUrl(photo)}
          >
            View
          </Button>
        ) : (
          <span className="text-gray-400">None</span>
        );
      },
    },
    { accessorKey: "email", header: "E-mail" },
    { accessorKey: "phone", header: "Contact Number" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        const color = {
          active: "bg-green-100 text-green-700",
          pending: "bg-yellow-100 text-yellow-700",
          inactive: "bg-red-100 text-red-700",
        }[status];

        return <Badge className={cn("capitalize", color)}>{status}</Badge>;
      },
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            side="bottom"
            className="bg-[#ABABAB]"
          >
            <DropdownMenuItem
              onClick={() => alert("View " + row.original.fullName)}
            >
              <Eye />
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert("Edit " + row.original.fullName)}
            >
              <Pencil />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert("Delete " + row.original.fullName)}
            >
              <Trash />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const table = useReactTable({
    data: dummyCoaches,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <div className="overflow-x-auto  rounded-xl border bg-white p-4 shadow">
        <CoachAction />
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 font-semibold text-gray-700"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-muted/50  transition">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 border-t">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={!!photoUrl} onOpenChange={() => setPhotoUrl(null)}>
        <DialogContent>
          <img
            src={photoUrl ?? ""}
            alt="Coach"
            className="max-w-full max-h-[70vh]"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

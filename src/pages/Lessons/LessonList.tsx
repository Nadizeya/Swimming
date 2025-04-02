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
import { Eye, MoreVertical, Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CoachAction from "./components/CoachAction";
import { useNavigate } from "react-router-dom";

import { ChevronUp, ChevronDown } from "lucide-react";
import { Lesson } from "@/features/lessons/lessonType";
import { dummyLessons } from "@/features/lessons/lessonData";

const SortableHeader = (column: any, label: string) => (
  <button
    onClick={() => column.toggleSorting()}
    className="flex items-center gap-1 font-semibold w-full"
  >
    <span>{label}</span>
    <div className="flex flex-col items-center -space-y-[7px]">
      <ChevronUp
        className={`w-2 h-3 ${
          column.getIsSorted() === "asc" ? "text-black" : "text-[#ABABAB]"
        }`}
      />
      <ChevronDown
        className={`w-2 h-3 ${
          column.getIsSorted() === "desc" ? "text-black" : "text-[#ABABAB]"
        }`}
      />
    </div>
  </button>
);

export default function LessonList() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const navigate = useNavigate();

  const columns: ColumnDef<Lesson>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => SortableHeader(column, "TITLE"),
    },
    {
      accessorKey: "location",
      header: ({ column }) => SortableHeader(column, "LOCATION"),
    },
    {
      accessorKey: "capacity",
      header: ({ column }) => SortableHeader(column, "CAPACITY"),
    },
    {
      accessorKey: "price",
      header: ({ column }) => SortableHeader(column, "PRICE ($)"),
      cell: ({ getValue }) => `$${(getValue() as number)?.toFixed(2)}`,
    },
    {
      accessorKey: "startDate",
      header: ({ column }) => SortableHeader(column, "START DATE"),
      cell: ({ getValue }) => new Date(getValue() as string).toLocaleString(),
    },
    {
      accessorKey: "endDate",
      header: ({ column }) => SortableHeader(column, "END DATE"),
      cell: ({ getValue }) => new Date(getValue() as string).toLocaleString(),
    },
    {
      accessorKey: "status",
      header: ({ column }) => SortableHeader(column, "STATUS"),
      cell: ({ row }) => {
        const status = row.original.status;
        const color = {
          active: "bg-green-100 text-green-700",
          inactive: "bg-red-100 text-red-700",
        }[status];

        return <Badge className={cn("capitalize", color)}>{status}</Badge>;
      },
    },
    {
      id: "actions",
      header: "ACTION",
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
            className="bg-[#D3D3D3] rounded-xl py-2 px-0 min-w-[140px] shadow-md border-none"
            sideOffset={1}
          >
            <DropdownMenuItem
              onClick={() => navigate(`/lessons/view/${row.original.id}`)}
              className="flex items-center gap-2 px-4 uppercase text-black text-sm hover:bg-gray-300 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              View
            </DropdownMenuItem>
            <div className="h-px w-full bg-gray-400 my-1" />
            <DropdownMenuItem
              onClick={() => navigate(`/lessons/edit/${row.original.id}`)}
              className="flex items-center gap-2 px-4 uppercase text-black text-sm hover:bg-gray-300 cursor-pointer"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </DropdownMenuItem>
            <div className="h-px w-full bg-gray-400 my-1" />
            <DropdownMenuItem
              onClick={() => alert("Delete lesson: " + row.original.title)}
              className="flex items-center gap-2 px-4 uppercase text-black text-sm hover:bg-gray-300 cursor-pointer"
            >
              <Trash className="w-4 h-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const table = useReactTable({
    data: dummyLessons,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      <div className="w-full rounded-xl  bg-white p-4 shadow">
        <CoachAction />
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-left">
            <thead className="bg-gray-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 font-semibold text-xs text-swimigo-grey"
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
                    <td
                      key={cell.id}
                      className="px-4 py-2 border-t border-[#ABABAB]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

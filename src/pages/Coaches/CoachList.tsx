import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, MoreVertical, Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CoachAction from "./components/CoachAction";
import { useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
import MainLoading from "@/shared/MainLoading";
import Pagination from "@/shared/Pagination";
import LimitSelector from "@/shared/LimitSelect";
import { useGetUsersByRoleQuery } from "@/features/user/userApi";
import { User } from "@/features/user/userType";

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

export default function CoachList() {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  //local states for sorting, pagination, searching in table
  const [sorting, setSorting] = useState<SortingState>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const sortBy = "fullName";
  const sortOrder = sorting[0]?.desc ? "desc" : "asc";
  const [search, setSearch] = useState("");

  //functions to set local states of pagination
  const handleLimitChange = (newLimit: number) => {
    setPage(1);
    setLimit(newLimit);
  };

  //Api fetching with parameters
  const { data, isLoading, isSuccess } = useGetUsersByRoleQuery({
    page,
    limit,
    sortBy,
    sortOrder,
    search,
    roles: "coach",
  });

  if (isSuccess) {
    console.log(data);
  }

  useEffect(() => {
    setPage(1);
  }, [search]);
  const navigate = useNavigate();

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "fullName",
      header: ({ column }) => SortableHeader(column, "FULL NAME"),
    },
    {
      accessorKey: "position",
      header: ({ column }) => SortableHeader(column, "POSITION "),
    },
    // {
    //   accessorKey: "sex",
    //   header: ({ column }) => SortableHeader(column, "SEX"),
    //   cell: ({ row }) => {
    //     const sex = row.original.sex;
    //     const color =
    //       sex === "Male"
    //         ? " text-blue-700 font-semibold tracking-wider"
    //         : sex === "Female"
    //         ? "text-pink-700 font-semibold tracking-wider"
    //         : " text-gray-700";

    //     return <p className={`${color}`}>{sex}</p>;
    //   },
    // },

    {
      accessorKey: "profileImage",
      header: "PHOTO",
      cell: ({ row }) => {
        const photo = row.original.profileImage;
        console.log(photo);
        return photo ? (
          <img
            src={photo}
            crossOrigin="anonymous"
            alt="Profile"
            className="w-14 h-14 lg:w-24 lg:h-24 border-swimigo-grey border rounded-lg shadow-md object-cover"
          />
        ) : (
          <span className="text-gray-400">None</span>
        );
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => SortableHeader(column, "E-MAIL"),
    },
    {
      accessorKey: "phoneNumber",
      header: ({ column }) => SortableHeader(column, "CONTACT NUMBER"),
    },
    {
      accessorKey: "status",
      header: ({ column }) => SortableHeader(column, "STATUS"),
      cell: ({ row }) => {
        const status = row.original.status;
        const color = {
          active: " text-[#62AB67]",
          pending: " text-[#FBA720]",
          inactive: "text-swimigo-red",
        }[status];

        return (
          <p className={`${color} uppercase font-bold text-sm`}>{status}</p>
        );
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
              onClick={() => navigate(`/coaches/view/${row.id}`)}
              className="flex items-center gap-2 px-4  uppercase text-black text-sm hover:bg-gray-300 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              View
            </DropdownMenuItem>
            <div className="h-px w-full bg-gray-400  my-1" />
            <DropdownMenuItem
              onClick={() => alert("Edit " + row.original.fullName)}
              className="flex items-center gap-2 px-4  uppercase text-black text-sm hover:bg-gray-300 cursor-pointer"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </DropdownMenuItem>
            <div className="h-px w-full bg-gray-400  my-1" />
            <DropdownMenuItem
              onClick={() => alert("Delete " + row.original.fullName)}
              className="flex items-center gap-2 px-4  uppercase text-black text-sm hover:bg-gray-300 cursor-pointer"
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
    data: data?.data ?? [],
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
      {isLoading && <MainLoading />}
      <div className="w-full rounded-xl  bg-white p-4 shadow">
        <CoachAction search={search} onSearchChange={setSearch} />
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-left ">
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
          {data && data.pagination.total && (
            <div className="flex justify-between items-center mt-4">
              <LimitSelector limit={limit} onChange={handleLimitChange} />

              <Pagination
                page={page}
                pageCount={Math.ceil(data.pagination.total / limit)}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
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
    </div>
  );
}

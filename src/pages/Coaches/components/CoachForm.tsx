import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/shared/FloatingInput";
import FileUpload from "./FileUpload";
import { useNavigate } from "react-router-dom";
import { FloatingLabelColoredSelect } from "@/shared/FloatingColorSelect";
import { FloatingLabelSelect } from "@/shared/FloatingSelect";
import { ProfilePhotoCard } from "@/shared/ProfileCard";

// ✅ Zod schema
export const coachFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  sex: z.enum(["male", "female"], { required_error: "Sex is required" }),
  position: z.string().min(1, "Position is required"),
  status: z.string().min(1, "Status is required"),
  email: z.string().email("Email is invalid"),
  contactNumber: z.string().min(8, "Contact number is required"),
});

export type CoachFormValues = z.infer<typeof coachFormSchema>;

export interface CoachFormProps {
  defaultValues?: Partial<CoachFormValues>;
  mode?: "add" | "edit" | "view";
  onSubmit: (data: CoachFormValues) => void;
  onFileSelect?: (file: File) => void;
  profilePhotoUrl?: string;
}

export function CoachForm({
  defaultValues,
  mode = "add",
  onSubmit,
  onFileSelect,
}: CoachFormProps) {
  const form = useForm<CoachFormValues>({
    resolver: zodResolver(coachFormSchema),
    defaultValues,
  });

  const navigate = useNavigate();
  const isView = mode === "view";
  const { reset } = form;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FloatingLabelInput
                  field={field}
                  label="FULL NAME"
                  type="text"
                  disabled={isView}
                />
              )}
            />
          </div>

          <div className="sm:col-span-1">
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FloatingLabelColoredSelect
                  field={field}
                  label="Sex"
                  placeholder="Select Sex"
                  disabled={isView}
                  options={[
                    {
                      value: "male",
                      label: "Male",
                      colorClass: "text-blue-600",
                    },
                    {
                      value: "female",
                      label: "Female",
                      colorClass: "text-pink-600",
                    },
                  ]}
                />
              )}
            />
          </div>
        </div>

        {/* Position & Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FloatingLabelSelect
                field={field}
                label="Position"
                placeholder="Select Position"
                disabled={isView}
                options={[
                  { label: "Head Coach", value: "head" },
                  { label: "Assistant Coach", value: "assistant" },
                  { label: "Trainer", value: "trainer" },
                ]}
              />
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FloatingLabelColoredSelect
                field={field}
                label="Status"
                placeholder="Select Status"
                disabled={isView}
                options={[
                  {
                    value: "active",
                    label: "Active",
                    colorClass: "text-green-600",
                  },
                  {
                    value: "inactive",
                    label: "Inactive",
                    colorClass: "text-red-600",
                  },
                ]}
              />
            )}
          />
        </div>

        {/* Email & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FloatingLabelInput
                  field={field}
                  label="E-MAIL"
                  type="email"
                  disabled={isView}
                />
              )}
            />
            <span className="text-xs text-swimigo-grey">
              Please input a valid e-mail address
            </span>
          </div>

          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FloatingLabelInput
                field={field}
                label="CONTACT NUMBER"
                type="text"
                disabled={isView}
              />
            )}
          />
        </div>

        {/* Profile Photo Placeholder */}
        {!isView ? (
          <FileUpload isView={isView} onFileSelect={onFileSelect} />
        ) : (
          <ProfilePhotoCard
            src="/assets/logo.png"
            filename="Photo Filename.jpg"
            sizeInKb={567}
          />
        )}

        {/* Submit / Reset Buttons */}
        {!isView && (
          <div className="flex justify-end gap-4">
            <Button
              className="border-none "
              variant="ghost"
              onClick={() => navigate(-1)}
            >
              Go back
            </Button>
            <Button
              type="reset"
              variant="outline"
              className="border-swimigo-grey text-swimigo-grey rounded-xl"
              onClick={() => reset()}
            >
              Reset Form
            </Button>
            <Button type="submit" className="rounded-xl">
              {mode === "edit" ? "Update Coach" : "Add Coach"}
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}

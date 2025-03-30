import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, Path, ControllerRenderProps } from "react-hook-form";

type FloatingLabelInputProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
};

export function FloatingLabelInput<T extends FieldValues>({
  field,
  label,
  type = "text",
  placeholder = " ",
  disabled = false,
}: FloatingLabelInputProps<T>) {
  return (
    <FormItem className="relative">
      <FormLabel
        className="absolute left-3 top-1 text-xs text-swimigo-blue transition-all
        peer-placeholder-shown:top-3.5
        peer-placeholder-shown:text-sm
        peer-placeholder-shown:text-gray-400
        peer-focus:top-1
        peer-focus:text-xs
        peer-focus:text-swimigo-blue"
      >
        {label}
      </FormLabel>
      <FormControl>
        <Input
          {...field}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className="peer h-12 px-3 pt-5 text-sm placeholder-transparent rounded-xl"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

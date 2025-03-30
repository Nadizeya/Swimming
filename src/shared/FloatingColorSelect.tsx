import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

type Option = {
  label: string;
  value: string;
  colorClass?: string; // Tailwind text color class
};

type FloatingLabelColoredSelectProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
  label: string;
  placeholder?: string;
  options: Option[];
  disabled?: boolean;
};

export function FloatingLabelColoredSelect<T extends FieldValues>({
  field,
  label,
  options,
  placeholder = " ",
  disabled = false,
}: FloatingLabelColoredSelectProps<T>) {
  const selectedOption = options.find((opt) => opt.value === field.value);

  return (
    <FormItem className="relative">
      {/* Floating Label */}
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
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
          disabled={disabled}
        >
          <SelectTrigger className="peer w-full h-12 px-3 pt-5 rounded-xl text-sm border-muted shadow-sm focus-visible:ring-2 focus-visible:ring-ring">
            {selectedOption ? (
              <span className={selectedOption.colorClass}>
                {selectedOption.label.toUpperCase()}
              </span>
            ) : (
              <SelectValue placeholder={placeholder} />
            )}
          </SelectTrigger>

          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                <span className={opt.colorClass}>
                  {opt.label.toUpperCase()}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>

      <FormMessage />
    </FormItem>
  );
}

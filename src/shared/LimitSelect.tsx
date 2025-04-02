import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LimitSelectorProps {
  limit: number;
  onChange: (value: number) => void;
}

export default function LimitSelector({ limit, onChange }: LimitSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Rows per page:</span>
      <Select
        value={limit.toString()}
        onValueChange={(val) => onChange(Number(val))}
      >
        <SelectTrigger size="sm" className="bg-swimigo-grey">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {[10, 30, 50, 100].map((option) => (
            <SelectItem key={option} value={option.toString()}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

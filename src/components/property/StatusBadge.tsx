import type { PropertyStatus } from "@/src/types/property";
import { STATUS_LABELS } from "@/src/lib/format";

const STYLES: Record<PropertyStatus, string> = {
  "for-sale": "bg-emerald-600 text-white",
  pending: "bg-amber-500 text-navy",
  sold: "bg-slate-600 text-white",
};

export function StatusBadge({ status }: { status: PropertyStatus }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}

import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const alertVariants = cva(
  "relative w-full flex items-center justify-between px-4 py-3 rounded-lg",
  {
    variants: {
      variant: {
        success: "bg-emerald-500 text-white",
        danger: "bg-red-600 text-white",
        warning: "bg-amber-400 text-black",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

interface AlertProps extends VariantProps<typeof alertVariants> {
  message: string;
  onClose?: () => void;
  className?: string;
}

export function Alert({ message, variant, onClose, className }: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant }), className)}>
      <div className="flex items-center gap-2">
        {variant === "success" && <CheckCircle className="h-5 w-5" />}
        {variant === "danger" && <AlertTriangle className="h-5 w-5" />}
        {variant === "warning" && <AlertTriangle className="h-5 w-5" />}
        <span>{message}</span>
      </div>
      <button
        title="Close"
        onClick={onClose ? onClose : () => {}}
        className="ml-auto pl-3 hover:opacity-80 transition-opacity"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

import { cn } from "../../lib/utils";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-medium rounded-full transition-all duration-300 active:scale-[0.97] outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-white text-black hover:bg-neutral-200 shadow-[0_4px_12px_rgba(255,255,255,0.15)]",
    secondary:
      "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700",
    outline:
      "bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-white/20",
    glow: "relative bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] overflow-hidden",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {/* If variant is glow, add a micro-sheen reflection element */}
      {variant === "glow" && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shine_1.5s_ease_infinite]" />
      )}
      
      <span className="flex items-center gap-2">
        {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
      </span>
    </button>
  );
}
export default Button;

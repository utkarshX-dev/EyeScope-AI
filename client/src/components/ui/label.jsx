export function Label({ children, htmlFor, className = "", ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-muted-foreground mb-1 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

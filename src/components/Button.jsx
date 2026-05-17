
export const Button = ({ className = "", size = "default", children, ...props }) => {
    const baseClasses = 
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg";
    const sizeClasses = {
        xs: "px-3 py-1.5 text-xs",
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (
        <button
            className={`${classes} cursor-pointer transition-all duration-200 hover:bg-primary/90 hover:scale-105 hover:shadow-xl active:scale-95`}
            style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-primary-foreground)',
                boxShadow: '0 10px 15px -3px rgb(32 178 166 / 0.25), 0 4px 6px -4px rgb(32 178 166 / 0.25)'
            }}
            {...props}
        >
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}

const Button = ({
    text,
    children,
    onClick,
    type = 'button',
    secondary = false,
    smallBtn = false,
    className = '',
    disabled = false,
    icon = null,
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        flex items-center justify-center gap-2 rounded-lg transition-all duration-200 font-medium outline-none focus:ring-2 focus:ring-offset-1
        
        /* Size Handling */
        ${smallBtn ? 'px-3 py-1.5 text-sm' : 'px-6 py-2.5 text-base'}
        
        /* Variant Handling */
        ${secondary
                    ? 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-600'
                    : 'bg-blue-600 text-white border border-transparent hover:bg-blue-700 focus:ring-blue-600 shadow-sm'
                }
        
        /* State Handling */
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
        
        /* Custom Class Overrides */
        ${className}
      `}
            {...props}
        >
            {/* Render Icon if provided */}
            {icon ? icon : ""}

            {/* Support both 'text' prop and children */}
            {text || children}
        </button>
    );
};

export default Button;
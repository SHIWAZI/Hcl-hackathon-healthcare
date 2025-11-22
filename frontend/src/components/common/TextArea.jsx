import { forwardRef } from 'react';

const TextArea = forwardRef(({
    label,
    className = '',
    error,
    placeholder,
    hidelabel = false,
    rows = 4,
    ...props
}, ref) => {
    return (
        <div className="w-full flex flex-col mb-2">
            {/* Render Label if provided and not hidden */}
            {label && !hidelabel && (
                <label className="text-sm font-semibold text-gray-700 mb-1">
                    {label}
                </label>
            )}

            <textarea
                ref={ref}
                rows={rows}
                placeholder={placeholder}
                className={`
                    w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200
                    text-gray-700 placeholder-gray-400 bg-white resize-y
                    ${error
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }
                    ${className}
                `}
                {...props}
            />

            {/* Render Error Message */}
            {error && (
                <span className="text-xs text-red-500 mt-1 ml-1">
                    {error}
                </span>
            )}
        </div>
    );
});

TextArea.displayName = "TextArea";

export default TextArea;
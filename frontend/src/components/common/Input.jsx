import React, { forwardRef } from 'react';

const InputBox = forwardRef(({
    label,
    type = 'text',
    className = '',
    error,
    placeholder,
    hidelabel = false,
    ...props
}, ref) => {
    return (
        <div className="w-full flex flex-col mb-2">
            {label && !hidelabel && (
                <label className="text-sm font-semibold text-gray-700 mb-1">
                    {label}
                </label>
            )}

            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                className={`
                    w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200
                    text-gray-700 placeholder-gray-400 bg-white
                    ${error
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }
                    ${className}
                `}
                {...props}
            />

            {error && (
                <span className="text-xs text-red-500 mt-1 ml-1">
                    {error}
                </span>
            )}
        </div>
    );
});

InputBox.displayName = "InputBox";

export default InputBox;
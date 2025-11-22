import { forwardRef } from 'react';

const SelectBox = forwardRef(({
    label,
    options = [],
    className = '',
    error,
    placeholder = "Select an option",
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

            <div className="relative">
                <select
                    ref={ref}
                    className={`
                        w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200
                        text-gray-700 bg-white appearance-none cursor-pointer
                        ${error
                            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }
                        ${className}
                    `}
                    {...props}
                    defaultValue=""
                >
                    <option value="" disabled className="text-gray-400">
                        {placeholder}
                    </option>

                    {options.map((opt, index) => {
                        const value = typeof opt === 'object' ? opt.value : opt;
                        const label = typeof opt === 'object' ? opt.label : opt;

                        return (
                            <option key={index} value={value}>
                                {label}
                            </option>
                        );
                    })}
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                </div>
            </div>

            {error && (
                <span className="text-xs text-red-500 mt-1 ml-1">
                    {error}
                </span>
            )}
        </div>
    );
});

SelectBox.displayName = "SelectBox";

export default SelectBox;
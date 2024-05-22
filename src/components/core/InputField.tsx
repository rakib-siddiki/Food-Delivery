import { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const InputField = forwardRef<HTMLInputElement, IProps>(
    ({ className, label, ...rest }, ref) => {
        const id = Math.random() * 10;

        return (
            <>
                {label && (
                    <label
                        htmlFor={`input_${id}`}
                        className='block mb-2 text-lg font-semibold text-gray-900 dark:text-white'
                    >
                        {label}
                    </label>
                )}
                <input
                    {...rest}
                    ref={ref}
                    id={`input_${id}`}
                    className={twMerge(
                        'w-full border font-semibold text-lg dark:bg-gray-800 border-gray-100 dark:border-gray-900 focus:border-gray-300 dark:focus:border-gray-200 transition duration-100 p-2.5 rounded outline-none placeholder:text-gray-100 dark:placeholder:text-gray-50 dark:text-gray-50',
                        className
                    )}
                />
            </>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField;

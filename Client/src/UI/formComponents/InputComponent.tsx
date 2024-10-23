import { ComponentPropsWithoutRef } from 'react';
import { FieldValues, Path, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { CiLock, CiMail } from 'react-icons/ci';

import { capitalizeAndFormat } from '../../shared/utils';

type InputComponentProps<T extends FieldValues> = {
    error: string | undefined;
    isResponseError?: boolean;
    register: UseFormRegister<T>;
    trigger: UseFormTrigger<T>;
    field: Path<T>;
    type?: string;
    password?: boolean;
    ref?: string;
    toggleVisibility?: () => void;
    isVisible?: boolean;
    shouldShowIcons?: boolean;
    triggerError?: boolean;
    showLabel?: boolean;
    labelName?: string;
} & ComponentPropsWithoutRef<'input'>;

export default function InputComponent<T extends FieldValues>({
    error,
    isResponseError,
    register,
    trigger,
    field,
    type = 'text',
    password,
    toggleVisibility,
    isVisible,
    shouldShowIcons,
    labelName,
    triggerError = true,
    showLabel = true,
    onBlur, // Destructure onBlur here
    ...props
}: InputComponentProps<T>) {
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Call the trigger for validation
        trigger(field);
        // If an onBlur was passed via props, call it
        if (onBlur) {
            (onBlur as React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>)(e);
        }
    };

    return (
        <div className='mt-3 w-full'>
            {showLabel && (
                <label
                    htmlFor={field}
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                >
                    {capitalizeAndFormat(labelName ?? field)}
                </label>
            )}
            <div className='relative'>
                {type === 'textarea' ? (
                    <textarea
                        id={field}
                        className={`mb-5 block w-full rounded-xl border ${
                            error ? 'border-customRed' : 'border-customBlue'
                        } p-2.5 text-sm text-customDarkBlue placeholder-customBlue outline-none focus:border-customBlue focus:ring-customBlue`}
                        placeholder={capitalizeAndFormat(field)}
                        {...register(field)}
                        onBlur={handleBlur}
                        {...(props as ComponentPropsWithoutRef<'textarea'>)}
                    />
                ) : (
                    <input
                        type={type}
                        id={field}
                        className={`block w-full rounded-xl border ${
                            error ? 'border-customRed' : 'border-customBlue'
                        } ${(password || field === 'email') && shouldShowIcons === true ? 'pl-10' : ''} p-2.5 text-sm text-customDarkBlue outline-none focus:border-customBlue focus:ring-customBlue`}
                        placeholder={capitalizeAndFormat(field)}
                        {...register(field)}
                        onBlur={handleBlur}
                        {...props}
                    />
                )}
                {password && (
                    <span
                        onClick={toggleVisibility}
                        className='absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-500 dark:text-gray-400'
                    >
                        {isVisible ? (
                            <AiFillEye className='h-6 w-6' />
                        ) : (
                            <AiOutlineEyeInvisible className='h-6 w-6' />
                        )}
                    </span>
                )}
                {field === 'email' && shouldShowIcons === true && (
                    <span>
                        <CiMail className='absolute left-4 top-1/2 -translate-y-1/2 scale-150 transform text-welcomeMsgColor' />
                    </span>
                )}
                {password && shouldShowIcons === true && (
                    <span>
                        <CiLock className='absolute left-4 top-1/2 -translate-y-1/2 scale-150 transform text-welcomeMsgColor' />
                    </span>
                )}
            </div>
            {error && triggerError && <span className='text-sm text-red-500'>{error}</span>}
        </div>
    );
}

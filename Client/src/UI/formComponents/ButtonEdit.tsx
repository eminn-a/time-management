import { ReactNode } from 'react';

interface ChildrenProps {
    children: ReactNode;
}

const ButtonEdit = ({ children }: ChildrenProps) => {
    return (
        <button
            type='button'
            className='mb-2 me-2 rounded-full bg-yellow-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900'
        >
            {children}
        </button>
    );
};

export default ButtonEdit;
import { Link } from 'react-router-dom';

import ButtonLogout from '@/UI/formComponents/ButtonLogout';

type UserLinksProps = {
    handleLogout: () => void;
};

const UserLinks = ({ handleLogout }: UserLinksProps) => {
    return (
        <>
            <li>
                <Link
                    className='mx-4 text-xl transition-colors duration-500 hover:text-gray-400'
                    to={'/auth/login'}
                >
                    <ButtonLogout handleLogout={handleLogout}>Logout</ButtonLogout>
                </Link>
            </li>
        </>
    );
};

export default UserLinks;
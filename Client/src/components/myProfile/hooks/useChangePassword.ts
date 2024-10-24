import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { urlKeys } from '@/reactQuery/constants';
import httpServices from '@/services/httpServices';

export default function useChangePassword() {
    const { patch } = httpServices();

    const {
        mutate: changePassword,
        isSuccess,
        isPending: isChangePasswordPending,
    } = useMutation({
        mutationFn: (data: { _id: string; password: string; confirmPassword: string }) =>
            patch(urlKeys.editUser + `/${data._id}/password_restore`, data),
        onSuccess: () => {
            toast.success('Password updated');
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { changePassword, isSuccess, isChangePasswordPending };
}

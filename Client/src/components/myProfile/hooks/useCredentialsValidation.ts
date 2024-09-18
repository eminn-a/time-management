import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { urlKeys } from '@/reactQuery/constants';
import httpServices from '@/services/httpServices';

export default function useCredentialsValidation() {
    const { post } = httpServices();

    const {
        mutate: validateCredentials,
        isSuccess: isValidateCredentialsSuccess,
        isError: isValidateCredentialsError,
    } = useMutation({
        mutationFn: (data: { email: string | undefined; password: string }) =>
            post(urlKeys.credentialsValidation, data),
        onError: () => {
            toast.error('Password is invalid');
        },
    });
    return { validateCredentials, isValidateCredentialsSuccess, isValidateCredentialsError };
}

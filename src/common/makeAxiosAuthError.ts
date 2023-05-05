import axios, { AxiosInstance, AxiosError } from "axios";

export type AxiosInstanceAuthError = AxiosInstance & {authErrorCheck: ((error: Error) => boolean)};

export default function makeAxiosAuthError(token: string | undefined, callOnAuthError: () => void): AxiosInstanceAuthError {
	const axiosInstanceAuthError: any = axios.create({
		headers: {
			authorization: token,
		},
	});
	axiosInstanceAuthError.authErrorCheck = function(error: Error): boolean {
		if (error instanceof AxiosError && error.response?.status === 401) {
			callOnAuthError();
			return true;
		}
		return false;
	};
	return axiosInstanceAuthError;
}

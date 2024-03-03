import { API_ROUTES } from "@/common/constants/api-routes";
import { axiosInstance } from "../plugins/axios";
import { AxiosResponse } from "axios";
import { TGenericResponse } from "../types/responses";
import { CustomersEntity } from "../types/entities";

export async function fetchAllCustomersQuery() {
    return await axiosInstance
                    .get(API_ROUTES.CUSTOMERS)
                    .then((resp: AxiosResponse<TGenericResponse<CustomersEntity[]>>) => resp.data)
}

export async function searchCustomerByName(text: string) {
    return await axiosInstance
                    .get(`${API_ROUTES.CUSTOMERS}/search?name=${text}`)
                    .then((resp: AxiosResponse<TGenericResponse<CustomersEntity[]>>) => resp.data)
}
import { API_ROUTES } from "@/common/constants/api-routes";
import { axiosInstance } from "../plugins/axios";
import { AxiosResponse } from "axios";
import { TGenericResponse } from "../types/responses";
import { ServicesEntity } from "../types/entities";

export async function fetchAllServicesQuery() {
    return await axiosInstance
                .get(API_ROUTES.SERVICES)
                .then((resp: AxiosResponse<TGenericResponse<ServicesEntity[]>>) => {
                    return resp.data.details
                })
}
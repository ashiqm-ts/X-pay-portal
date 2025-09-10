import axiosInstance from "./axios";
import { jwtServiceConfig } from "./jwtServiceConfig";

export const getTransactionRoutes = (data: any) => {
  const response = axiosInstance.post(jwtServiceConfig.transactionRoutesGetAll, data);
  return response;
};
export const createTransactionRoute  = (data: any) => {
  const response = axiosInstance.post(jwtServiceConfig.transactionRoutesCreate, data);
  return response;
};
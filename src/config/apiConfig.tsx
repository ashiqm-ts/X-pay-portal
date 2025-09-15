import axiosInstance from './axios';
import { jwtServiceConfig } from './jwtServiceConfig';

// routing config page
export const getTransactionRoutes = (data: any) => {
  const response = axiosInstance.post(jwtServiceConfig.transactionRoutesGetAll, data);
  return response;
};
export const createTransactionRoute = (data: any) => {
  const response = axiosInstance.post(jwtServiceConfig.transactionRoutesCreate, data);
  return response;
};
export const searchTransactionRoute = (data: any) => {
  const response = axiosInstance.post(jwtServiceConfig.transactionRoutesSearchAll, data);
  return response;
};

//routing timer config
export const getTransactionTimerConfig = (data: any) => {
  const response = axiosInstance.post(jwtServiceConfig.transactionTimerConfigGetAll, data);
  return response;
};
export const createTransactionTimerConfig = (data: any) => {
  const response = axiosInstance.post(jwtServiceConfig.transactionTimerConfigCreate, data);
  return response;
};
export const searchTransactionTimerConfig = (data: any) => {
  const response = axiosInstance.post(jwtServiceConfig.transactionTimerConfigSearch, data);
  return response;
};
//source timer config
export const createSourceConfig = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.sourceConfigCreate, data);
};

export const searchSourceConfig = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.sourceConfigSearch, data);
};

export const getAllSourceConfigs = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.sourceConfigGetAll, data);
};


//destination config
export const createDestinationConfig = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.destinationConfigCreate, data);
};

export const searchDestinationConfig = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.destinationConfigSearch, data);
};

export const getAllDestinationConfigs = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.destinationConfigGetAll, data);
};

// issuer config

export const createIssuerConfig = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.issuerConfigCreate, data);
};

export const searchIssuerConfig = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.issuerConfigSearch, data);
};

export const getAllIssuerConfigs = (data: any) => {
  return axiosInstance.post(jwtServiceConfig.issuerConfigGetAll, data);
};

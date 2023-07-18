import axios from 'axios';
import queryString from 'query-string';
import { ConnectionRequestInterface, ConnectionRequestGetQueryInterface } from 'interfaces/connection-request';
import { GetQueryInterface } from '../../interfaces';

export const getConnectionRequests = async (query?: ConnectionRequestGetQueryInterface) => {
  const response = await axios.get(`/api/connection-requests${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createConnectionRequest = async (connectionRequest: ConnectionRequestInterface) => {
  const response = await axios.post('/api/connection-requests', connectionRequest);
  return response.data;
};

export const updateConnectionRequestById = async (id: string, connectionRequest: ConnectionRequestInterface) => {
  const response = await axios.put(`/api/connection-requests/${id}`, connectionRequest);
  return response.data;
};

export const getConnectionRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/connection-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteConnectionRequestById = async (id: string) => {
  const response = await axios.delete(`/api/connection-requests/${id}`);
  return response.data;
};

import axios, { AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export interface Message {
  sender: string;
  content: string;
  createdAt: number;
}

export const getAllItem = async (): Promise<AxiosResponse<Message[]> | null> => {
  try {
    const response = await axios.get(`${baseURL}/api/item`);
    return response;
  } catch (error) {
    console.error("Error fetching item:", error);
    return null;
  }
};

export const newItem = async (content: string): Promise<AxiosResponse<Message> | null> => {
  try {
    const response = await axios.post(`${baseURL}/api/item`, { content });
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  }
};

export const updateItem = async (id: number, content: string): Promise<AxiosResponse<Message> | null> => {
  try {
    const response = await axios.put(`${baseURL}/api/item/${id}`, { content });
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  }
};

export const deleteItem = async (id: number): Promise<AxiosResponse<void> | null> => {
  try {
    const response = await axios.delete(`${baseURL}/api/item/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting item:", error);
    return null;
  }
};

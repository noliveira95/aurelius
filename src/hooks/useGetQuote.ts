import { useState } from "react";
import axios, { AxiosResponse } from "axios";

const URL: string = import.meta.env.VITE_API_URL;

interface DataType {
  text: string;
  author: string;
}

const useGetQuote = (): {
  data: DataType | null;
  loading: boolean;
  error: any;
  getQuote: () => Promise<void>;
} => {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const getQuote = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<DataType> = await axios.get(URL);
      setData(response.data);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getQuote };
};

export default useGetQuote;

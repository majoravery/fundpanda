import axios from "axios";
import { useQuery } from "react-query";
import { API_URL, QUERY_KEY } from "./constants";

export type Pinder = {
  imageUrl: string;
  title: string;
  distance: number;
};

type GetPinderRequest = {
  customerCode: string;
  city: string;
};

type GetPinderResponse = Pinder[];

export const getPinder = async ({ customerCode, city }: GetPinderRequest) => {
  const url = `${API_URL.PINDER}?customerCode=${customerCode}&city=${city}`;
  const { data } = await axios.get<GetPinderResponse>(url);

  return data;
};

export const useGetPinder = ({ customerCode, city }: GetPinderRequest) => {
  const result = useQuery([QUERY_KEY.GET_PINDER, customerCode, city], () =>
    getPinder({ customerCode, city })
  );

  return result;
};

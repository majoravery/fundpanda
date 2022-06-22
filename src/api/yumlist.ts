import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { API_URL, QUERY_KEY } from "./constants";
import { Pinder } from "./recommendations";

type GetYumlistRequest = {
  cid: string;
};

type GetYumlistResponse = Pinder[];

export const getYumlist = async ({ cid }: GetYumlistRequest) => {
  const url = `${API_URL.YUMLIST}?cid=${cid}`;
  const { data } = await axios.get<GetYumlistResponse>(url);

  return data;
};

export const useGetYumlist = ({ cid }: GetYumlistRequest) => {
  const result = useQuery([QUERY_KEY.GET_YUMLIST, cid], () =>
    getYumlist({ cid })
  );

  return result;
};

type AddYumlistRequest = {
  customerId: string;
  dishId: string;
};

type AddYumlistResponse = {};

export const addYumlist = async ({ customerId, dishId }: AddYumlistRequest) => {
  const url = `${API_URL.YUMLIST}`;
  const { data } = await axios.post<AddYumlistResponse>(url, {
    customerId,
    dishId,
  });

  return data;
};

export const useAddYumlist = ({ customerId, dishId }: AddYumlistRequest) => {
  const result = useMutation(() => addYumlist({ customerId, dishId }));

  return result;
};

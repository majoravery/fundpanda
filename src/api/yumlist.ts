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
  const { data } = await axios.get<GetYumlistResponse>(url, {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": 1,
    },
  });

  return data;
};

export const useGetYumlist = ({ cid }: GetYumlistRequest) => {
  const result = useQuery([QUERY_KEY.GET_YUMLIST, cid], () =>
    getYumlist({ cid })
  );

  return result;
};

type AddYumlistRequest = {
  customer_id: string;
  dish_id: number;
};

type AddYumlistResponse = {};

export const addYumlist = async ({
  customer_id,
  dish_id,
}: AddYumlistRequest) => {
  const url = `${API_URL.YUMLIST}`;
  const { data } = await axios.post<AddYumlistResponse>(
    url,
    {
      customer_id,
      dish_id,
    },
    {
      headers: {
        "ngrok-skip-browser-warning": 1,
      },
    }
  );

  return data;
};

export const useAddYumlist = ({ customer_id, dish_id }: AddYumlistRequest) => {
  const result = useMutation(() => addYumlist({ customer_id, dish_id }));

  return result;
};

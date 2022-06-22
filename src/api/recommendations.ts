import axios from "axios";
import { useQuery } from "react-query";
import { API_URL, QUERY_KEY } from "./constants";

export type Pinder = {
  imageUrl: string;
  dishName: string;
  restaurantName: string;
  price: number;
  rating: number;
  deliveryFee: number;
  deal: string;
  dishDescription: string;
  deliveryTime: number;
  dishId: string;
};

type GetRecommendationsRequest = {
  cid: string;
  city: string;
};

type GetRecommendationsResponse = Pinder[];

export const getRecommendations = async ({
  cid,
  city,
}: GetRecommendationsRequest) => {
  const url = `${API_URL.RECOMMENDATIONS}?cid=${cid}&city=${city}`;
  const { data } = await axios.get<GetRecommendationsResponse>(url);

  return data;
};

export const useGetRecommendations = ({
  cid,
  city,
}: GetRecommendationsRequest) => {
  const result = useQuery([QUERY_KEY.GET_PINDER, cid, city], () =>
    getRecommendations({ cid, city })
  );

  return result;
};

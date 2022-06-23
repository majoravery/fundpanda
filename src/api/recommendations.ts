import axios from "axios";
import { useQuery } from "react-query";
import { API_URL, QUERY_KEY } from "./constants";

export type Pinder = {
  image_url: string;
  dish_name: string;
  restaurant_name: string;
  price: number;
  rating: number;
  delivery_fee: number;
  deal: string;
  dish_description: string;
  delivery_time: number;
  dish_id: string;
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
  const url = `${API_URL.RECOMMENDATIONS}/${city}/${cid}`;
  const { data } = await axios.get<GetRecommendationsResponse>(url);

  return data;
};

export const useGetRecommendations = ({
  cid,
  city,
}: GetRecommendationsRequest) => {
  const result = useQuery([QUERY_KEY.GET_RECOMMENDATIONS, cid, city], () =>
    getRecommendations({ cid, city })
  );

  return result;
};

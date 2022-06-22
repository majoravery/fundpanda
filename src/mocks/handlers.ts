import { rest } from "msw";
import { API_URL } from "../api/constants";
import * as pinder from "./pinder";

export const handlers = [
  rest.get(`*${API_URL.RECOMMENDATIONS}`, (_, res, ctx) => {
    return res(ctx.json(pinder.data));
  }),
];

import { api } from "./baseUrl";

const cotnact = async (data) => {
  return await api.post("/contactapi", data);
};

export const repository = {
  cotnact,
};

import { create } from "apisauce";
export const api = create({
  baseURL: "/q/api/",
  headers: {
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  },
});

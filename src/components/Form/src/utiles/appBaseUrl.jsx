import { create } from "apisauce";
export const api = create({
  baseURL:
    "https://dashboard.famcast.co.za/wp-json/contact-form-7/v1/contact-forms/7064/",
  headers: {
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
  },
});

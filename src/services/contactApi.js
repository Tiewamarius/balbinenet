import { apiRequest } from "../client";
import { API_ENDPOINTS } from "../endpoints";

export function sendContactMessage(payload) {
  return apiRequest(API_ENDPOINTS.contact, {
    method: "POST",
    body: payload,
  });
}
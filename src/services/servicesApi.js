import { apiRequest } from "../client";
import { API_ENDPOINTS } from "../endpoints";

export function getServices({ signal } = {}) {
  return apiRequest(API_ENDPOINTS.services, { signal });
}

export function getServiceById(id, { signal } = {}) {
  return apiRequest(
    `${API_ENDPOINTS.services}/${encodeURIComponent(id)}`,
    { signal }
  );
}
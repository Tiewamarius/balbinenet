import { apiRequest } from "../client";
import { API_ENDPOINTS } from "../endpoints";

export function getFormules({ signal } = {}) {
  return apiRequest(API_ENDPOINTS.formules, { signal });
}

export function getFormuleById(id, { signal } = {}) {
  return apiRequest(
    `${API_ENDPOINTS.formules}/${encodeURIComponent(id)}`,
    { signal }
  );
}
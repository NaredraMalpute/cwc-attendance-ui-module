
export const BASE_URL = `${window.location.protocol}//${
  window.location.hostname == "localhost"
    ? "app.creditwisecapital.in"
    : window.location.hostname
}`;

export const API_URL = `${BASE_URL}`;

export const FrontendURL = `${window.location.protocol}//${window.location.hostname}`;

export const FileUrl = `${window.location.protocol}//${window.location.hostname}/`;

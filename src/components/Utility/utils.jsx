import { url } from "../../services/url.service";

export const generateFilePath = (fileName) => {
  return `${url}/uploads/${fileName}`;
};

export const baseUrl = import.meta.env.BASE_URL;
export const baseUrlNoLeadingSlash = baseUrl.replace(/^\/+/g, '');
export const baseUrlNoTrailingSlash = baseUrl.replace(/\/+$/g, '');
export const baseUrlNoSlash = baseUrlNoLeadingSlash.replace(/\/+$/g, '');

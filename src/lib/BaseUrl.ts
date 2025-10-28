const viteBase = import.meta.env.BASE_URL;
const noLeadingSlash = BaseUrl.replace(/^\/+/g, '');
const noTrailingSlash = BaseUrl.replace(/\/+$/g, '');
const noSlash = noLeadingSlash.replace(/\/+$/g, '');

export const BaseUrl = {
	viteBase,
	noLeadingSlash,
	noTrailingSlash,
	noSlash,
}

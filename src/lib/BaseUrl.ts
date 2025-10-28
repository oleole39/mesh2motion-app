const viteBase = import.meta.env.BASE_URL;
const noLeadingSlash = viteBase.replace(/^\/+/g, '');
const noTrailingSlash = viteBase.replace(/\/+$/g, '');
const noSlash = noLeadingSlash.replace(/\/+$/g, '');

export const BaseUrl = {
	viteBase,
	noLeadingSlash,
	noTrailingSlash,
	noSlash,
}

import { base } from '$app/paths';

/**
 * Prefix an absolute asset path (e.g. `/messenger/...`, `/draco/...`) with the
 * SvelteKit base path so it resolves both at the site root during local dev and
 * under a subpath such as GitHub Pages' `/messenger-copy/`.
 */
export function withBase(path: string): string {
	return `${base}${path}`;
}

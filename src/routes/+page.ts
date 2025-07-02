import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const name = url.searchParams.get('name');

	if (!name) {
		return { info: null };
	}

	const res = await fetch(`https://api.agify.io?name=${encodeURIComponent(name)}`);
	const data = await res.json();
	return {
		info: { count: data.count, name: data.name, age: data.age }
	};
};

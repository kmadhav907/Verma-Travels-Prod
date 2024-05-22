export interface SetMetaTagsInterface {
	title: string;
	description: string;
	keywords: string;
	structuredData: any;
	canonicalUrl: string;
}
export const setMetaTags = (props: SetMetaTagsInterface) => {
	document.title = props.title;

	const metaDescription: HTMLMetaElement | null = document.querySelector(
		'meta[name="description"]'
	);
	if (metaDescription) {
		metaDescription.content = props.description;
	} else {
		const meta = document.createElement("meta");
		meta.name = "description";
		meta.content = props.description;
		document.head.appendChild(meta);
	}

	const metaKeywords: HTMLMetaElement | null = document.querySelector(
		'meta[name="keywords"]'
	);
	if (metaKeywords) {
		metaKeywords.content = props.keywords;
	} else {
		const meta = document.createElement("meta");
		meta.name = "keywords";
		meta.content = props.keywords;
		document.head.appendChild(meta);
	}

	let link: HTMLLinkElement | null = document.querySelector(
		'link[rel="canonical"]'
	);
	if (link) {
		link.href = props.canonicalUrl;
	} else {
		link = document.createElement("link");
		link.rel = "canonical";
		link.href = props.canonicalUrl;
		document.head.appendChild(link);
	}

	if (props.structuredData) {
		let script: HTMLScriptElement | null = document.querySelector(
			'script[type="application/ld+json"]'
		);
		if (script) {
			script.innerHTML = JSON.stringify(props.structuredData);
		} else {
			script = document.createElement("script");
			script.type = "application/ld+json";
			script.innerHTML = JSON.stringify(props.structuredData);
			document.head.appendChild(script);
		}
	}
};

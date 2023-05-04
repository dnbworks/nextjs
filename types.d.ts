type User = {
	"id": number,
	"name": string,
	"url": string,
	"description": string,
	"link": string,
	"slug": string,
	"avatar_urls": {
		"24": string,
		"48": string,
		"96": string
	},
	"meta": Url[],
	"_links": {
		"self": Url[],
		"collection": Url[]
	}
}

type Url = {
	"href": string
}

type Post = 	{
	"id": number,
	"date": string,
	"date_gmt": string,
	"guid": {
		"rendered": string
	},
	"modified": string,
	"modified_gmt": string,
	"slug": string,
	"status": string,
	"type": string,
	"link": string,
	"title": {
		"rendered": string
	},
	"content": {
		"rendered": string,
		"protected": boolean
	},
	"excerpt": {
		"rendered": string,
		"protected": boolean
	},
	"author": number,
	"featured_media": number,
	"comment_status": string,
	"ping_status": string,
	"sticky": boolean,
	"template": string,
	"format": string,
	"meta": string[],
	"categories": number[],
	"tags": string[],
	"_links": {
		"self": [
			{
				"href": string
			}
		],
		"collection": Url[],
		"about": Url[],
		"author": Url[],
		"replies": Url[],
		"version-history": Url[],
		"predecessor-version": Url[],
		"wp:attachment": Url[],
		"wp:term": Url[],
		"curies": Url[]
	}
}

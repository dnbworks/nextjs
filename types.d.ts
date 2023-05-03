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

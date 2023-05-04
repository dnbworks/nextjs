
export default async function getUserPosts(userId: string) {
	const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/?author=${userId}`, { next: { revalidate: 60 } });

	if (!res.ok) return undefined

	return res.json();

}



export default async function getUser(userId: string) {
	const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/users/${userId}`);

	if (!res.ok) return undefined

	return res.json();

}

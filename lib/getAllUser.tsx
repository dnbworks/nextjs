
export default async function getAllUser() {
 const res = await fetch("http://localhost/wordpress/wp-json/wp/v2/users/");

	if (!res.ok) throw new Error("failed to fetch data");

	return res.json();
}

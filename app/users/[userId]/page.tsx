import type { Metadata } from "next";
import getUser from "@/lib/getUser";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'User',
	description: 'Individual user',
}

type Params = {
	params: {
		userId: string
	}
}

export default async function UserPage({ params: { userId }}: Params) {
	const userData: Promise<User> = getUser(userId);
	const user = await userData
	console.log(user)

	const content = (
		<section>
			<h2>
				<Link href="/users">Back to Users</Link>
			</h2>
			<br/>
			<div>
				<h3>{user.name}</h3>
				<p>{user.description}</p>
			</div>
			
		</section>
	);
	return content;
}

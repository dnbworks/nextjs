import type { Metadata } from "next";
import getAllUser from "@/lib/getAllUser";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Users',
	description: 'List of users',
}



export default async function UserPages() {
	const userData: Promise<User[]> = getAllUser();
	const users = await userData

	const content = (
		<section>
			<h2>
				<Link href="/">Back to Home</Link>
			</h2>
			<br/>
			{users.map(user => {
				return (
					<>
						<p key={user.id}>
							<Link href={`/users/${user.id}`}>{user.name}</Link>
						</p>
					</>
				)
			})}
		</section>
	);
	return content;
}

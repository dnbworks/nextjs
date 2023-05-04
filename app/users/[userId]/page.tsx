import type { Metadata } from "next";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import getAllUser from "@/lib/getAllUser";
import Link from "next/link";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { notFound } from 'next/navigation'

type Params = {
	params: {
		userId: string
	}
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
	const userData: Promise<User> = getUser(userId)
	const user: User = await userData

	if (!user?.name) {
		return {
				title: "User Not Found"
		}
	}

	return {
					title: user.name,
					description: `This is the page of ${user.name}`
	}

}

export default async function UserPage({ params: { userId }}: Params) {
	const userData: Promise<User> = getUser(userId);
	const UserPostData: Promise<Post[]> = getUserPosts(userId);

	// const [user, userPost] = await Promise.all([userData, UserPostData]);

	const user = await userData

	if (!user?.name) return notFound()


	return (
		<>
		<h2>
				<Link href="/users">Back to Users</Link>
			</h2>
			<br/>
			<div>
				<h3>{user.name}</h3>
	
				<p>{user.description}</p>
			</div>
			<br/>
			<h3>Posts</h3>
			<Suspense fallback={<h2>loading</h2>}>
				{/* @ts-expect-error Server Component */}
				<UserPosts promise={UserPostData}/>
			</Suspense>
		</>
	)
}


export async function generateStaticParams() {
	const usersData: Promise<User[]> = getAllUser()
	const users = await usersData

	return users.map(user => ({
					userId: user.id.toString()
	}))
}
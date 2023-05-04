type Props = {
	promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
	const posts = await promise
	const content = posts.map(post => {
		return (
			<article key={post.id}>
				<h2>{post.title.rendered}</h2>
				<p>{post.excerpt.rendered}</p>
				<br/>
			</article>
		)
	})
		return content
}

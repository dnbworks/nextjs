export default async function getWikiResults(searchTerm: string) {

    // const searchParams = new URLSearchParams({
    //     action: 'query',
    //     generator: 'search',
    //     gsrsearch: searchTerm,
    //     gsrlimit: '20',
    //     prop: 'pageimages|extracts',
    //     exchars: '100',
    //     exintro: 'true',
    //     explaintext: 'true',
    //     exlimit: 'max',
    //     format: 'json',
    //     origin: '*',
    // })

    // const response = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts?' + searchParams)
    const response = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts?search=' + searchTerm)

    return response.json()
}
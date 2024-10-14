export const getCollections = async () => {
    const collections = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/collections`,
    )
    return await collections.json()
}

export const getCollectionDetails = async (collectionId: string) => {
    const collection = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`,
    )
    return await collection.json()
}

export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    return await products.json()
}

export const getHomeProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    const products = await response.json()
    const shuffledProducts = products.sort(() => 0.5 - Math.random())
    return shuffledProducts.slice(0, 12)
}

export const getProductDetails = async (productId: string) => {
    const product = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
    )
    return await product.json()
}

export const getSearchedProducts = async (query: string) => {
    const searchedProducts = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search/${query}`,
    )
    return await searchedProducts.json()
}

export const getOrders = async (customerId: string) => {
    const orders = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`,
    )
    return await orders.json()
}

export const getRelatedProducts = async (productId: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`,
    )
    const relatedProducts = await response.json()

    if (relatedProducts.length > 4) {
        const shuffledProducts = relatedProducts.sort(() => 0.5 - Math.random())

        return shuffledProducts.slice(0, 4)
    }

    return relatedProducts
}

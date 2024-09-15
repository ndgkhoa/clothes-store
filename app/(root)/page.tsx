'use client'

import Collections from '@/components/Collections'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getCollections, getProducts } from '@/lib/actions/actions'
import Loader from '@/components/Loader'

export default function Home() {
    const [collections, setCollections] = useState<CollectionType[]>([])
    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState(true)

    const getHomeProducts = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products`,
        )
        const products = await response.json()

        const shuffledProducts = products.sort(() => 0.5 - Math.random())

        return shuffledProducts.slice(0, 12)
    }

    const fetchData = async () => {
        try {
            const [collectionsResult, productsResult] = await Promise.all([
                getCollections(),
                getHomeProducts(),
            ])
            setCollections(collectionsResult)
            setProducts(productsResult)
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return loading ? (
        <Loader />
    ) : (
        <>
            <Image
                src="/banner.jpg"
                alt="banner"
                width={2000}
                height={1000}
                className="w-screen"
            />
            <Collections collections={collections} />
            <ProductList products={products} />
        </>
    )
}

export const dynamic = 'force-dynamic'

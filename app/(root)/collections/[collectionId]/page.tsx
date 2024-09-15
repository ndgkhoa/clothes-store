'use client'

import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import { getCollectionDetails } from '@/lib/actions/actions'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const CollectionDetails = ({
    params,
}: {
    params: { collectionId: string }
}) => {
    const [collectionDetails, setCollectionDetails] = useState<{
        image: string
        title: string
        description: string
        products: ProductType[]
    } | null>(null)

    const fetchData = async () => {
        try {
            if (params.collectionId) {
                const data = await getCollectionDetails(params.collectionId)
                setCollectionDetails(data)
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [params.collectionId])
    if (!collectionDetails) return <Loader />
    return (
        <div className="px-10 py-5  flex flex-col items-center gap-8">
            <Image
                src={collectionDetails.image}
                width={1500}
                height={1000}
                alt="collection"
                className="w-full h-[400px] object-cover rounded-xl "
            />
            <p className="text-heading3-bold text-grey-2">
                {collectionDetails.title}
            </p>
            <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
                {collectionDetails.description}
            </p>
            <div className="flex flex-wrap gap-18 mx-auto">
                {collectionDetails.products.map((product: ProductType) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CollectionDetails

export const dynamic = 'force-dynamic'

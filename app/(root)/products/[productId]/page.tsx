'use client'

import Gallery from '@/components/Gallery'
import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import ProductInfo from '@/components/ProductInfo'
import { getProductDetails, getRelatedProducts } from '@/lib/actions/actions'
import { useEffect, useState } from 'react'

const ProductDetails = ({ params }: { params: { productId: string } }) => {
    const [productDetails, setProductDetails] = useState<ProductType>()
    const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([])

    const fetchData = async () => {
        try {
            const [productDetailsResult, relatedProductsResult] =
                await Promise.all([
                    getProductDetails(params.productId),
                    getRelatedProducts(params.productId),
                ])
            setProductDetails(productDetailsResult)
            setRelatedProducts(relatedProductsResult)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [params.productId])

    if (!productDetails) return <Loader />
    return (
        <>
            <div className="flex justify-center items-start gap-16 py-0 px-5 max-md:flex-col max-md:items-center">
                <Gallery productMedia={productDetails.media} />
                <ProductInfo productInfo={productDetails} />
            </div>

            <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
                <p className="text-heading3-bold">Related Products</p>
                <div className="flex flex-wrap gap-16 mx-auto mt-8">
                    {relatedProducts?.map((product: ProductType) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductDetails

export const dynamic = 'force-dynamic'

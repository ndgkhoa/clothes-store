'use client'

import Loader from '@/components/Loader'
import ProductCard from '@/components/ProductCard'
import { getProductDetails } from '@/lib/actions/actions'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

const WishList = () => {
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [signedInUser, setSignedInUser] = useState<UserType | null>(null)
    const [wishlist, setWishlist] = useState<ProductType[]>([])

    const getUser = async () => {
        try {
            const res = await fetch('/api/users')
            const data = await res.json()
            setSignedInUser(data)
            setLoading(false)
        } catch (error) {
            console.log('[users_GET]', error)
        }
    }

    useEffect(() => {
        if (user.isSignedIn && !signedInUser) {
            getUser()
        }
    }, [user, signedInUser])

    const getWishListProducts = async () => {
        setLoading(true)

        if (!signedInUser) return

        const wishlistProducts = await Promise.all(
            signedInUser.wishList.map(async (productId) => {
                const res = await getProductDetails(productId)
                return res
            }),
        )
        setWishlist(wishlistProducts)
        setLoading(false)
    }

    useEffect(() => {
        if (signedInUser) {
            getWishListProducts()
        }
    }, [signedInUser])

    const updateSignedInUser = (updatedUser: UserType) => {
        setSignedInUser(updatedUser)
    }

    return loading ? (
        <Loader />
    ) : (
        <div className="px-10 py-5">
            <p className="text-heading3-bold my-10">Your Wishlist</p>
            {wishlist.length === 0 && <p>No items in your wishlist</p>}
            <div className="flex flex-wrap justify-center gap-16">
                {wishlist.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        updateSignedInUser={updateSignedInUser}
                    />
                ))}
            </div>
        </div>
    )
}

export default WishList

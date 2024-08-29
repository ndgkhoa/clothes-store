'use client'

import useCart from '@/lib/hooks/useCart'
import { MinusCircle, PlusCircle, Trash } from 'lucide-react'
import Image from 'next/image'

const Cart = () => {
    const cart = useCart()

    const total = cart.cartItems.reduce(
        (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
        0,
    )
    const totalRounded = parseFloat(total.toFixed(2))

    return (
        <div className="flex gap-20 py-16 px-10 max-lg:flex-col">
            <div className="w-2/3 max-lg:w-full">
                <p className="text-heading3-bold">Shopping Cart</p>
                <hr className="my-6" />

                {cart.cartItems.length === 0 ? (
                    <p className="text-body-bold">No item in cart</p>
                ) : (
                    <div>
                        {cart.cartItems.map((cartItem) => (
                            <div className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-6 py-5 items-center max-sm:items-start justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src={cartItem.item.media[0]}
                                        width={100}
                                        height={100}
                                        alt="product"
                                        className="rounded-lg w-30 h-30 object-cover"
                                    />

                                    <div className="flex flex-col gap-3 ml-4">
                                        <p className="text-body-bold">
                                            {cartItem.item.title}
                                        </p>
                                        {cartItem.color && (
                                            <p className="text-small-medium">
                                                {cartItem.color}
                                            </p>
                                        )}
                                        {cartItem.size && (
                                            <p className="text-small-medium">
                                                {cartItem.size}
                                            </p>
                                        )}
                                        <p className="text-small-medium">
                                            ${cartItem.item.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <MinusCircle
                                        className="hover:text-red-1 cursor-pointer"
                                        onClick={() =>
                                            cart.decreaseQuantity(
                                                cartItem.item._id,
                                            )
                                        }
                                    />
                                    <p className="text-body-bold">
                                        {cartItem.quantity}
                                    </p>
                                    <PlusCircle
                                        className="hover:text-red-1 cursor-pointer"
                                        onClick={() =>
                                            cart.increaseQuantity(
                                                cartItem.item._id,
                                            )
                                        }
                                    />
                                </div>
                                <Trash
                                    className="hover:text-red-1 cursor-pointer"
                                    onClick={() =>
                                        cart.removeItem(cartItem.item._id)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
                <p className="text-heading4-bold pb-4">
                    Summary
                    <span>
                        {' '}
                        {`(${cart.cartItems.length} ${cart.cartItems.length > 1 ? 'items' : 'item'})`}
                    </span>
                </p>
                <div className="flex justify-between text-body-semibold">
                    <span>Total Amount</span>
                    <span>$ {totalRounded}</span>
                </div>
                <button className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart

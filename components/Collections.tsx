import Image from 'next/image'
import Link from 'next/link'

interface CollectionsProps {
    collections: CollectionType[]
}

const Collections: React.FC<CollectionsProps> = ({ collections }) => {
    return (
        <div className="flex flex-col items-center gap-10 py-8 px-5">
            <div className="text-heading1-bold">Collections</div>
            {!collections || collections.length === 0 ? (
                <p className="text-body-bold">No collections found</p>
            ) : (
                <div className="flex flex-wrap items-center justify-center mx-auto gap-8">
                    {collections.map((collection: CollectionType) => (
                        <Link
                            href={`/collections/${collection._id}`}
                            key={collection._id}
                        >
                            <Image
                                src={collection.image}
                                alt={collection.title}
                                width={350}
                                height={200}
                                className="rounded-lg cursor-pointer"
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Collections

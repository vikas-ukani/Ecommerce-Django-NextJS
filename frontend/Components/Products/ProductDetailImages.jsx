import Image from 'next/image'
const ProductDetailImages = ({ product }) => {
    return (
        <div className="md:flex-1 px-4">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <span className="text-5xl">
                        <Image
                            width="100%" height="100%" layout="responsive"
                            src={product.image}
                            alt={product.name}
                        />
                    </span>
                </div>
            </div>
            {/* <div x-data="{ image: 1 }" x-cloak>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <div x-show="image === 1" className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        <span className="text-5xl">1</span>
                    </div>

                    <div x-show="image === 2" className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        <span className="text-5xl">2</span>
                    </div>

                    <div x-show="image === 3" className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        <span className="text-5xl">3</span>
                    </div>

                    <div x-show="image === 4" className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        <span className="text-5xl">4</span>
                    </div>
                </div>

                <div className="flex -mx-2 mb-4">
                    <template x-for="i in 4">
                    <div className="flex-1 px-2">
                    <button x-on: click="image = i" : className="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                    <span x-text="i" className="text-2xl"></span>
                    </button>
                </div>
            </template>
        </div>
        </div > */}
        </div >
    );
}

export default ProductDetailImages;
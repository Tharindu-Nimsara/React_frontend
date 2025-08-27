export default function ProductCard(props) {
    const product = props.product
    return (
       <div className="w-72 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 m-4 p-4 text-center hover:scale-105">
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover rounded-md mb-4"
        src={product.images[0]}
        alt={product.name}
      />

      {/* Product Info */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-4">
        {product.labelledPrice && (
          <span className="text-gray-400 line-through mr-2">
            ${product.labelledPrice}
          </span>
        )}
        <span className="text-lg font-semibold text-green-600">
          ${product.price}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
        <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
          Buy Now
        </button>
      </div>

      {/* Stock Badge */}
      {!product.isAvailable && (
        <span className="block mt-3 text-red-600 font-semibold">
          Out of Stock
        </span>
      )}
    </div>
    );
  }

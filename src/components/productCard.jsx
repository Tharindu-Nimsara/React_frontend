export default function ProductCard(props) {
    console.log(props);
    return (
      <div className="w-64 bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform">
        <img
          className="w-full h-40 object-cover rounded-lg mb-3"
          src={props.picture}
          alt={props.name}
        />
        <h1 className="text-lg font-semibold text-gray-800 mb-2">{props.name}</h1>
        <p className="text-sm text-gray-600 mb-2">{props.description}</p>
        <span className="block font-bold text-gray-700 mb-4">Price: ${props.price}</span>
        <div className="flex justify-center gap-2">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    );
  }
  
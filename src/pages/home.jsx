export default function HomePage() {
    return (
        <div className="w-full h-screen bg-amber-100 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Home</h1>
            <p className="text-gray-700 mb-4">Welcome to the home page!</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Go to Signup
            </button>
        </div>
    )
}
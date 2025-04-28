export default function NotFoundPage(){ 
    return(
        <div className="w-full h-screen bg-amber-100 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">404 Not Found</h1>
            <p className="text-gray-700">The page you are looking for does not exist.</p>
            {/* back to home page button */}
            <a href="/" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-4">Back to Home</a>
        </div>
    )
}
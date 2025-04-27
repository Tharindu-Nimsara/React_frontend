export default function SignupPage() {

    return (
        <div className="w-full h-screen bg-amber-100 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Signup</h1>
            <form className="bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                    <input className="border border-gray-300 p-2 w-full rounded" type="text" id="username" name="username" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input className="border border-gray-300 p-2 w-full rounded" type="email" id="email" name="email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input className="border border-gray-300 p-2 w-full rounded" type="password" id="password" name="password" required />
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">Signup</button>
            </form>
        </div>
    )

}

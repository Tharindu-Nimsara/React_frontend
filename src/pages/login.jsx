export default function LoginPage(){
    return(
        <div className="w-full h-screen bg-[url(login.jpg)] bg-center bg-cover backdrop-blur-md flex flex-col items-center justify-center">
            
            <form className=" px-10 py-8 rounded-[20px] backdrop-blur-md shadow-xl w-80">
                <div className="flex justify-center items-center ">
                    <h1 className="text-2xl font-bold mb-4 item-center justify-center">Login</h1>
                </div>
                 
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                    <input className="border border-gray-300 p-2 w-full rounded" type="text" id="username" name="username" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input className="border border-gray-300 p-2 w-full rounded" type="password" id="password" name="password" required />
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">Login</button>
            </form>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='h-screen bg-black flex items-center justify-center'>
        <div className='bg-white py-2 px-2 w-[50%]'>
          <div className="border-2 border-gray-100 rounded-md py-5 px-12">
          <h1 className="text-3xl my-1.5 font-medium text-gray-800">Login</h1>
          <p className="font-normal text-sm">Please fill in your credentials to login</p>
          <form className="mt-3">
            <div className="flex flex-col space-y-1">
              <label className="font-semibold text-sm">Username</label>
              <input className="outline outline-gray-200 rounded-sm p-1 w-[60%]" type='email' />
            </div>

            <div className="flex flex-col space-y-1 mt-2">
              <label className="font-semibold text-sm">Password</label>
              <input className="outline outline-gray-200 rounded-sm p-1 w-[60%]" type='password' />
            </div>

            <button className="bg-blue-500 text-white px-6 py-1.5 rounded-lg mt-5">Login</button>

          </form>
          <div className="text-sm text-gray-700 mt-2">Don`t have an account? <Link className="text-blue-500" href={'signup'}>Sign Up Now</Link></div>
        </div>
        </div>
    </div>
  );
}

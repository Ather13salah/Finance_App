   import Link from 'next/link';

    export default function NotFound() {
      return (
        <div className='w-full py-6 h-screen flex justify-center items-center dark:bg-blue-900 dark:text-white transition-colors duration-500  flex-col '>
          <h1 className='text-black text-2xl dark:text-white font-bold'>404 - Page Not Found</h1>
          <p className='text-black dark:text-white'>The page you are looking for does not exist.</p>
          <Link  href="/"><button className='bg-black w-36 h-8 dark:bg-white dark:text-black  text-center rounded-md cursor-pointer text-white'>Go back to Home</button></Link>
        </div>
      );
    }
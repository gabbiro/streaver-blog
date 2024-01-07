"use client";

export default function Error({ reset }: { reset: () => void; }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8">
      <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
        500
      </p>
      <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
        Something went wrong!
      </p>
      <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
        Whoops, something went wrong on our servers.
      </p>
      <button
        className="flex items-center space-x-2 bg-blue-500  hover:bg-blue-600 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

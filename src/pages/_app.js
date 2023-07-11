import "../../styles/globals.css";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[60px_minmax(300px,_1fr)] bg-gray-100 min-h-screen">
        <div className="hidden lg:block lg:row-span-2 lg:col-span-3">
          <div className="bg-white rounded-3xl overflow-hidden"></div>
        </div>
        <div className=" hidden lg:block lg:row-span-2 lg:col-span-3">
          <div className="bg-white rounded-3xl px-4 flex items-center">
            <div className="flex gap-x-2 items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
              <span>مرتب سازی</span>
            </div>
            <ul className="flex items-center gap-x-4">
              <li className="cursor-pointer test-gray-700 py-4">جدیدترین</li>
              <li className="cursor-pointer test-gray-700 py-4">گرانترین</li>
              <li className="cursor-pointer test-gray-700 py-4">ارزان ترین</li>
            </ul>
          </div>
        </div>
        <div className="font-bold bg-pink-200 lg:col-span-9">footer</div>
      </div>
    </div>
  );
}

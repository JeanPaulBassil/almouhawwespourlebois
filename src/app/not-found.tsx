import React from 'react'
import Header from './_components/Header';

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
    <div className="flex relative flex-col px-2 w-full rounded-none min-h-[1024px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57ee0bab781dfb96a78c9ded9d6dd6a12f00af0f9128310a0042668f23ef2fb5?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col pt-6 pr-1 pb-20 pl-16 w-full min-h-[1024px] max-md:pl-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/588963771e72520a0fb111523ef6720f8cbf3be901ae638dc52682fd4218dc5d?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="" className="object-cover absolute inset-0 size-full" />
        <ErrorContent />
      </div>
    </div>
  </div>
  )
}

const ErrorContent: React.FC = () => {
    const errorNumbers = ['4', '0', '4'];
  
    return (
      <main className="flex relative flex-col items-center px-20 pb-20 mt-9 w-full bg-white rounded-md max-w-[1269px] max-md:px-5 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {errorNumbers.map((number, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="font-medium leading-none text-[462px] text-stone-700 max-md:mt-10 max-md:text-4xl">
                  {number}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-14 text-3xl text-center text-stone-700 max-md:mt-10 max-md:max-w-full">
          Oh, you must be lost, there is no such page.
        </p>
        <a href="/" className="gap-2.5 px-16 py-3 mt-6 text-3xl font-bold bg-slate-400 rounded-[42px] text-neutral-100 max-md:px-5 max-md:max-w-full">
          Go to the home page
        </a>
      </main>
    );
  };
  

export default NotFound
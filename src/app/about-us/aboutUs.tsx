import React from 'react'

type Props = {}

const aboutUs = (props: Props) => {
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      <main className="bg-white mt-0 flex w-full flex-col bg-opacity-40 pt-2 max-md:max-w-full">
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

const ContactForm: React.FC = () => {
    return (
      <section className="flex flex-col items-start self-end mt-24 mr-12 w-full max-w-[1265px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <h2 className="self-end text-8xl font-medium leading-none uppercase text-neutral-700 max-md:max-w-full max-md:text-4xl">
          Any questions?
        </h2>
        <div className="mt-11 w-full max-w-[1208px] max-md:mt-10 max-md:max-w-full">
          <form className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-3xl font-medium leading-none text-zinc-300 text-opacity-50 max-md:mt-10 max-md:max-w-full">
                <label htmlFor="name" className="sr-only">Your name</label>
                <input
                  type="text"
                  id="name"
                  className="px-12 py-5 border-4 border-solid border-slate-400 rounded-[42px] max-md:px-5 max-md:max-w-full"
                  placeholder="Your name"
                />
                <label htmlFor="phone" className="sr-only">Your telephone number</label>
                <input
                  type="tel"
                  id="phone"
                  className="px-12 py-5 mt-6 border-4 border-solid border-slate-400 rounded-[42px] max-md:px-5 max-md:max-w-full"
                  placeholder="Your telephone number"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <p className="text-3xl font-medium leading-10 text-right text-neutral-700 max-md:mt-10 max-md:max-w-full">
                Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.
              </p>
            </div>
          </form>
        </div>
        <div className="mt-6 w-full max-w-[598px]">
          <label htmlFor="question" className="sr-only">Your question</label>
          <textarea
            id="question"
            className="px-12 pt-5 pb-40 w-full max-w-full text-3xl font-medium leading-none border-4 border-solid border-slate-400 rounded-[42px] text-zinc-300 text-opacity-50 max-md:px-5 max-md:pb-28"
            placeholder="Your question"
          ></textarea>
        </div>
        <button type="submit" className="gap-2.5 self-stretch px-16 py-3 mt-10 text-3xl font-bold whitespace-nowrap bg-slate-400 rounded-[42px] text-neutral-100 max-md:px-5">
          Send
        </button>
      </section>
    );
  };

  const AboutUs: React.FC = () => {
    return (
      <section className="flex relative flex-col justify-center py-28 w-full min-h-[989px] max-md:pr-5 max-md:pb-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a44efd131a6054f9633105c7660d55b3f5488b98fae381a06e43b47d8002a11?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Background" className="object-cover absolute inset-0 size-full" />
        <div className="relative px-20 py-10 mb-0 bg-white rounded-none max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col font-medium text-neutral-800 max-md:mt-10 max-md:max-w-full">
                <h2 className="mr-6 text-8xl leading-none uppercase max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                  About us
                </h2>
                <p className="mt-12 text-3xl leading-10 max-md:mt-10 max-md:max-w-full">
                  <span className="font-bold text-neutral-800">Al Mouhawess Wood</span> - We specialize in crafting high-quality wood products tailored to your specifications. From custom furniture like chairs, tables, and wardrobes to unique architectural elements, our workshop is equipped with state-of-the-art industrial equipment to bring your visions to life.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-end mt-4 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/250c4ffe7e2c5e063669b531711569491181955b47c3092898b898286a4a0eff?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample 1" className="object-contain max-w-full aspect-square rounded-[42px] w-[205px]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00577b6d5026895d41a431d84847ade6b9aae15e2b4c7e20acfd52c4e4ec8a0e?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample 2" className="object-contain z-10 self-start mt-0 max-w-full aspect-[1.01] rounded-[42px] w-[350px]" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c39b5d5a6f60d004e72f3901b55181184a99475b64dab39af2435973f6ee7d6?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample 3" className="object-contain mt-6 mr-8 max-w-full aspect-square rounded-[42px] w-[205px] max-md:mr-2.5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const Footer: React.FC = () => {
    return (
      <footer className="flex flex-col pt-14 mt-28 w-full bg-orange-100 max-md:mt-10 max-md:max-w-full">
        <div className="px-20 py-14 w-full bg-orange-100 shadow-[0px_-6px_52px_rgba(245,245,245,0.17)] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-medium leading-none text-neutral-900 max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc93e28094d08f9bacbef26c7c2c65204b0e3dd882aa573eab436f0123f71ab?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Company Logo" className="object-contain w-32 aspect-[0.96]" />
                <a href="/privacy-policy" className="mt-8">Privacy Policy</a>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-3.5 mt-11 text-3xl font-medium leading-none text-neutral-900 max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dbf6291cb1733c1af9a861a15cc236991aa9bc570da5822b4accfc9db3f89c5?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Phone icon" className="object-contain shrink-0 aspect-square w-[50px]" />
                <a href="tel:+96103660844" className="my-auto basis-auto">+961 03 660 844</a>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[49%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-3.5 mt-10 text-3xl font-medium leading-none text-neutral-900 max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/709dfd7dc229f3e2961c152aa36c4f2aa1e1c5161adadaa279fd4bc3e9047f7c?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Location icon" className="object-contain shrink-0 aspect-square w-[50px]" />
                <address className="flex-auto not-italic">Kouba, Batroun, Lebanon</address>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

export default aboutUs

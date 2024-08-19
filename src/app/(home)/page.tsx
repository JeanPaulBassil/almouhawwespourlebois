import React from 'react'
import Header from '../_components/Header'
import { Button, Image } from '@nextui-org/react'

const page = () => {
  return (
    <div
      className="absolute left-0 top-0 w-full"
    >
      <div className="mt-20 py-16 lg:mt-36">
        <div className="bg-white flex flex-col overflow-hidden">
          <div className="relative flex min-h-[5869px] w-full flex-col max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a23b9ccc995e69a40365b9632e6e887b91f0a472256991f5c80e883a74df4138?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54"
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <Hero />
            <WoodTypes />
            <Advantages />
            <AboutUs />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactForm: React.FC = () => {
  return (
    <section className="mt-24 max-md:mt-10">
      <h2 className="relative self-center text-8xl font-medium leading-none uppercase text-neutral-700 max-md:max-w-full max-md:text-4xl">
        Any questions?
      </h2>
      <form className="mt-11 flex flex-col items-center">
        <label htmlFor="name" className="sr-only">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="relative self-center px-14 py-5 mt-11 max-w-full text-3xl font-medium leading-none rounded-2xl border-4 border-solid border-slate-400 text-zinc-300 text-opacity-50 w-[598px] max-md:px-5 max-md:mt-10"
        />
        <label htmlFor="phone" className="sr-only">Your telephone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your telephone number"
          className="relative self-center px-14 py-5 mt-6 max-w-full text-3xl font-medium leading-none rounded-2xl border-4 border-solid border-slate-400 text-zinc-300 text-opacity-50 w-[598px] max-md:px-5"
        />
        <label htmlFor="question" className="sr-only">Your question</label>
        <textarea
          id="question"
          name="question"
          placeholder="Your question"
          className="relative self-center px-14 pt-5 pb-40 mt-6 max-w-full text-3xl font-medium leading-none rounded-2xl border-4 border-solid border-slate-400 text-zinc-300 text-opacity-50 w-[598px] max-md:px-5 max-md:pb-28"
        ></textarea>
        <button type="submit" className="relative gap-2.5 self-center px-16 py-3 mt-10 text-3xl font-bold whitespace-nowrap rounded-xl bg-slate-400 text-neutral-100 max-md:px-5">
          Send
        </button>
      </form>
    </section>
  );
};

const AboutUs: React.FC = () => {
  return (
    <section className="relative px-20 py-10 mt-44 max-w-full bg-orange-100 rounded-none w-[1324px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col font-medium text-stone-900 max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-8xl leading-none uppercase max-md:max-w-full max-md:text-4xl">About us</h2>
            <p className="mt-16 ml-2.5 text-3xl leading-10 max-md:mt-10 max-md:max-w-full">
              <span className="font-bold text-stone-900">Al Mouhawess Wood</span> - We specialize in crafting high-quality wood products tailored to your specifications. From custom furniture like chairs, tables, and wardrobes to unique architectural elements, our workshop is equipped with state-of-the-art industrial equipment to bring your visions to life.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow items-end mt-4 max-md:mt-10 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/166275ef27f6fdfbb9749a4fe1d895b982cc9c6da5b5cfd1f4dd418a2deebeeb?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample" className="object-contain max-w-full rounded-3xl aspect-square w-[205px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d02f854640c78cc1bddb8a98e9c8cfed81bd84d553525d18e7d875e4cb1a056?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample" className="object-contain z-10 self-start mt-0 max-w-full rounded-3xl aspect-[1.01] w-[350px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cfaf17b9c17729f1739878979b034dbfc08bc0e4238930d9fdc13ba09442b89?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample" className="object-contain mt-6 mr-8 max-w-full rounded-3xl aspect-square w-[205px] max-md:mr-2.5" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Advantages: React.FC = () => {
  return (
    <section className="flex relative flex-col pt-5 mt-32 w-full bg-white bg-opacity-40 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col items-start px-20 py-56 w-full min-h-[1223px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e742e2b4a47e5be3a7e74f9d2b741df69f3d6c17a388847908685c7a308ce3?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="" className="object-cover absolute inset-0 size-full" />
        <h2 className="relative text-7xl font-medium uppercase leading-[104px] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
          Advantages <br /> working with us
        </h2>
        <div className="relative self-end mt-20 w-full max-w-[1118px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1ea08b5b7928f4ef1f9b79a6ddffb8ec2bc0025d255bfd307434c0d69f12032?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood craftsmanship" className="object-contain grow w-full rounded-3xl aspect-[1.58] max-md:mt-10 max-md:max-w-full" />
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow text-3xl font-medium leading-10 text-neutral-900 max-md:mt-10">
                <p>Premium materials ensure exceptional results.</p>
                <p className="mt-12 max-md:mt-10">Personalized solutions prioritize your satisfaction.</p>
                <p className="mt-24 mr-5 max-md:mt-10 max-md:mr-2.5">Over 40 years of industry excellence.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="relative gap-2.5 px-16 py-3 mt-20 mb-0 text-3xl font-bold rounded-xl bg-slate-400 text-neutral-100 max-md:px-5 max-md:mt-10 max-md:mb-2.5">
          Receive a consultation
        </button>
      </div>
    </section>
  );
};


const WoodTypes: React.FC = () => {
  const woodImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d41d77d112be5ce5c32e1071342afead001c1d94183217c1d484fc6b83ba0c73?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54", alt: "Wood type 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9017e241cb2464c77cfff2c9e29c8d9a9b0f69bd7f7426af11d5676362da2638?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54", alt: "Wood type 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/53b0f79ed305cff06b550aadd5bf59e264d78de778303c8a607bee5a0e69d414?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54", alt: "Wood type 3" },
  ];

  return (
    <section className="mt-40 max-md:mt-10">
      <h2 className="relative self-start ml-12 text-8xl font-medium uppercase leading-[120px] text-zinc-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
        THE WOOD WE WORK WITH
      </h2>
      {woodImages.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className="object-contain mt-16 w-full rounded-3xl aspect-[4.76] max-w-[1019px] max-md:mt-10 max-md:max-w-full"
        />
      ))}
    </section>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative px-16 py-12 mt-16 -mb-7 max-w-full bg-white w-[1245px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 ml-3 max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 self-start mt-5 basis-0 w-fit max-md:max-w-full">
                <h1 className="text-8xl font-medium uppercase leading-[104px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                  Solid wood products
                </h1>
                <p className="mt-20 text-3xl leading-10 text-orange-900 w-[333px] max-md:mt-10">
                  Oak, beech, ash and much more
                </p>
              </div>
              <div className="shrink-0 w-px border border-black border-solid h-[511px]" />
            </div>
            <button className="gap-2.5 self-start px-16 py-3 text-3xl font-bold bg-sky-900 rounded-md text-neutral-100 max-md:px-5">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6984fc1b6d94d2bbd3b64afc7dd17ee8bba7706e6e1256b7b694b8ec5798c55?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample" className="object-contain shrink-0 self-stretch my-auto max-w-full rounded-xl aspect-square w-[205px] max-md:mt-10" />
        </div>
        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col grow max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/32d6527a90d79d7b8bea6d0f0aecc5ba9a19d34c5dfd5e70de149594db2ef21e?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample" className="object-contain rounded-xl aspect-square w-[205px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/411d17f5b0490f36dc4ab00b1581c89919e21dedd8c8406221eba37d6e047e3d?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Wood product sample" className="object-contain mt-52 rounded-xl aspect-square w-[205px] max-md:mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};


export default page

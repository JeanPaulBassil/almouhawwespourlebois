import React from 'react';

const products = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3df085cced4583023fde061428efe5bacad6ff592ee44c102bc2606f50c43ed4?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54",
    title: "Pure Oak",
    category: "Oak",
    description: "Pure oak wood is a durable and robust hardwood known for its distinct grain patterns and natural beauty. It comes from oak trees and is highly valued for its strength, resistance to wear, and longevity. Oak wood is commonly used in furniture making, flooring, cabinetry, and decorative woodwork due to its attractive appearance and ability to withstand heavy use. Its color ranges from light to medium brown with a slight reddish tint, and it can be easily stained or finished to enhance its natural grain and texture.",
    tags: ["Durable", "Robust"]
  },
  // Repeat the product object 5 more times to have a total of 6 products
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3df085cced4583023fde061428efe5bacad6ff592ee44c102bc2606f50c43ed4?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54",
    title: "Pure Oak",
    category: "Oak",
    description: "Pure oak wood is a durable and robust hardwood known for its distinct grain patterns and natural beauty. It comes from oak trees and is highly valued for its strength, resistance to wear, and longevity. Oak wood is commonly used in furniture making, flooring, cabinetry, and decorative woodwork due to its attractive appearance and ability to withstand heavy use. Its color ranges from light to medium brown with a slight reddish tint, and it can be easily stained or finished to enhance its natural grain and texture.",
    tags: ["Durable", "Robust"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3df085cced4583023fde061428efe5bacad6ff592ee44c102bc2606f50c43ed4?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54",
    title: "Pure Oak",
    category: "Oak",
    description: "Pure oak wood is a durable and robust hardwood known for its distinct grain patterns and natural beauty. It comes from oak trees and is highly valued for its strength, resistance to wear, and longevity. Oak wood is commonly used in furniture making, flooring, cabinetry, and decorative woodwork due to its attractive appearance and ability to withstand heavy use. Its color ranges from light to medium brown with a slight reddish tint, and it can be easily stained or finished to enhance its natural grain and texture.",
    tags: ["Durable", "Robust"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3df085cced4583023fde061428efe5bacad6ff592ee44c102bc2606f50c43ed4?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54",
    title: "Pure Oak",
    category: "Oak",
    description: "Pure oak wood is a durable and robust hardwood known for its distinct grain patterns and natural beauty. It comes from oak trees and is highly valued for its strength, resistance to wear, and longevity. Oak wood is commonly used in furniture making, flooring, cabinetry, and decorative woodwork due to its attractive appearance and ability to withstand heavy use. Its color ranges from light to medium brown with a slight reddish tint, and it can be easily stained or finished to enhance its natural grain and texture.",
    tags: ["Durable", "Robust"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3df085cced4583023fde061428efe5bacad6ff592ee44c102bc2606f50c43ed4?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54",
    title: "Pure Oak",
    category: "Oak",
    description: "Pure oak wood is a durable and robust hardwood known for its distinct grain patterns and natural beauty. It comes from oak trees and is highly valued for its strength, resistance to wear, and longevity. Oak wood is commonly used in furniture making, flooring, cabinetry, and decorative woodwork due to its attractive appearance and ability to withstand heavy use. Its color ranges from light to medium brown with a slight reddish tint, and it can be easily stained or finished to enhance its natural grain and texture.",
    tags: ["Durable", "Robust"]
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3df085cced4583023fde061428efe5bacad6ff592ee44c102bc2606f50c43ed4?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54",
    title: "Pure Oak",
    category: "Oak",
    description: "Pure oak wood is a durable and robust hardwood known for its distinct grain patterns and natural beauty. It comes from oak trees and is highly valued for its strength, resistance to wear, and longevity. Oak wood is commonly used in furniture making, flooring, cabinetry, and decorative woodwork due to its attractive appearance and ability to withstand heavy use. Its color ranges from light to medium brown with a slight reddish tint, and it can be easily stained or finished to enhance its natural grain and texture.",
    tags: ["Durable", "Robust"]
  }
];

const HomePage: React.FC = () => {
  return (
    <Layout>
      <ProductGrid products={products.slice(0, 3)} />
      <ProductGrid products={products.slice(3)} />
    </Layout>
  );
};

interface Product {
    imageSrc: string;
    title: string;
    category?: string;
    description: string;
    tags: string[];
  }
  
  interface ProductGridProps {
    products: Product[];
  }
  
  const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
      <section className="relative mt-9 w-full max-w-[1260px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>
    );
  };

  interface ProductCardProps {
    imageSrc: string;
    title: string;
    category?: string;
    description: string;
    tags: string[];
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, category, description, tags }) => {
    return (
      <article className="flex relative flex-col items-start px-3.5 py-3.5 mx-auto w-full font-medium text-black bg-white rounded-md border border-solid border-zinc-100 max-md:mt-10">
        <img loading="lazy" src={imageSrc} alt={title} className="object-contain self-stretch w-full rounded-md aspect-[2.03]" />
        <h2 className="mt-4 text-xl tracking-wider max-md:ml-2">{title}</h2>
        {category && <p className="mt-3 text-xs italic tracking-wide text-blue-500 max-md:ml-2">{category}</p>}
        <p className="self-stretch mt-2.5 mr-4 text-xs tracking-wide max-md:mr-2.5 max-md:ml-2.5">{description}</p>
        <div className="flex gap-4 mt-3 ml-2.5 max-w-full text-xs tracking-wide text-white whitespace-nowrap w-[159px]">
          {tags.map((tag, index) => (
            <span key={index} className={`px-3.5 py-2 ${index === 0 ? 'bg-amber-500' : 'bg-green-500'} rounded-lg`}>
              {tag}
            </span>
          ))}
        </div>
      </article>
    );
  };

  const Footer: React.FC = () => {
    return (
      <footer className="px-20 pt-11 pb-7 w-full bg-white shadow-[0px_-6px_52px_rgba(245,245,245,0.17)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xl font-medium leading-none text-neutral-900 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc93e28094d08f9bacbef26c7c2c65204b0e3dd882aa573eab436f0123f71ab?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Logo" className="object-contain w-32 aspect-[0.96]" />
              <div className="mt-8">Privacy Policy</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-3.5 self-stretch my-auto text-3xl font-medium leading-none text-neutral-900 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/230cf077c3ce28e77c92ea3de80060f950c3fd9367939c2dc1215f894122e498?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Phone icon" className="object-contain shrink-0 aspect-square w-[50px]" />
              <div className="my-auto basis-auto">+961 03 660 844</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[49%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-3.5 mt-10 text-3xl font-medium leading-none text-neutral-900 max-md:mt-10">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b825e4721c80b06f689673aa637ff8ea257ece2db0d0f98ec6dfa934aab31998?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="Location icon" className="object-contain shrink-0 aspect-square w-[50px]" />
              <div className="flex-auto">Kouba, Batroun, Lebanon</div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  interface LayoutProps {
    children: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="flex overflow-hidden flex-col pt-32 bg-white max-md:pt-24">
        <div className="flex flex-col pt-2 bg-white bg-opacity-40 max-md:max-w-full">
          <div className="flex relative flex-col pb-9 w-full min-h-[989px] max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f8139ca922410f8856616ebba64b1eaafdb62e086510e8f7419589a3880a020?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="" className="object-cover absolute inset-0 size-full" />
            <div className="flex relative z-10 flex-col items-center pb-14 mt-0 w-full min-h-[1095px] max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c76b61508ed850a415013e139c1f8b83105a7d04d83475426e1feab6645d84e4?placeholderIfAbsent=true&apiKey=2de14d5ec932453993e23fb305f88b54" alt="" className="object-cover absolute inset-0 size-full" />
              <main className="w-full">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  

export default HomePage;


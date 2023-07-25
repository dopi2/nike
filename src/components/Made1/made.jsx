/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import './made.css'
const products = [
    {
      id: 1,
      name: '2021 Mens Casual Board Shoes Running Sneakers - White/Black',
      href: '#',
      imageSrc: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/5153201/1.jpg?5028',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₦ 7,900',
    },
    {
        id: 1,
        name: 'Mens Leather Formal Leather Casual Shoes Large Size-Black',
        href: '#',
        imageSrc: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/3720222/1.jpg?2323',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦ 8,199',
      },
      {
        id: 1,
        name: '2021 Men Casual Noble Running Sneakers - Black/Gold',
        href: '#',
        imageSrc: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/536976/1.jpg?9999',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦ 5,400 ',
      },
      {
        id: 1,
        name: '2022 Mens Casual Sci-Fi Warrior Shoes Running Sneakers - Black/Green',
        href: '#',
        imageSrc: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/947319/1.jpg?0054',
        imageAlt: "Front of men's Basic Tee in black.",
    price: '₦ 6,800',
      },
      {
        id: 1,
        name: '2022 Mens All-match British Style Boots - Black',
        href: '#',
        imageSrc: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/980539/1.jpg?0542',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦ 6,600',
      },
      {
        id: 1,
        name: '2022 Womens Air Cushion Shoes Running Sneakers - Purple',
        href: '#',
        imageSrc: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/790729/1.jpg?7698',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦ 5,700',
      },
      {
        id: 1,
        name: '2021 Mens Casual Classic Shoes Board Sneakers-Grey',
        href: '#',
        imageSrc: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/538249/1.jpg?9115',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦ 7,199',
      },
      {
        id: 1,
        name: '2022 Mens Casual Board Shoes Running Sneakers - Black',
        href: '#',
        imageSrc: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/916208/1.jpg?2462',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦ 4,999',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="" id="sol">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shoes</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
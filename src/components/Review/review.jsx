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
import './review.css'
const products = [
    {
      id: 1,
      name: 'MR BEAUMONT VEGAN BLACK DIAL/BLACK',
      href: '/watch1',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0081/3226/3998/products/PER2472.jpg?v=1667828671',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₦67,500.00',
      color: 'Blue',
      
    },
    {
        id: 2,
        name: 'MR BEAUMONT VEGAN WHITE DIAL/BROWN',
        href: '/watch2',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0081/3226/3998/products/ezgif.com-gif-maker_4.jpg?v=1667828815',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦67,500.00',
        color: 'Brown',
        
      },
      {
        id: 3,
        name: 'MR BEAUMONT VEGAN BLACK DIAL/BROWN',
        href: '/watch3',
        imageSrc: 'https://www.engraversguild.co.uk/wp-content/uploads/2020/04/large-oxford-ladies-watch-grey-strap.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦67,500.00',
        color: 'Ash',
        
      },
      {
        id: 4,
        name: 'MR BEAUMONT VEGAN WHITE DIAL/BLACK',
        href: '/watch4',
        imageSrc: 'https://media.very.co.uk/i/very/VJ2JD_SQ1_0000000932_ROSE_GOLD_SLf?$300x400_retinamobilex2$',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₦67,500.00',
        color: 'Gold',
        
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" id="ter">Weekend Sales</h2>
  
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
  
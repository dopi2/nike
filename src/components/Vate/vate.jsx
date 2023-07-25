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
const products = [
    {
      id: 1,
      name: 'Nike shoes',
      href: '#',
      imageSrc: 'https://underarmour.scene7.com/is/image/Underarmour/3026274-101_DEFAULT?rp=standard-30pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=472,600',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$352',
      color: 'Ash',
      
    },
    {
        id: 2,
        name: 'Nike Supreme',
        href: '#',
        imageSrc: 'https://www.kicksonfire.com/wp-content/uploads/2023/01/3026949-400-PAIR.jpg?x58464',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$254',
        color: 'Blue',
        
      },
      {
        id: 3,
        name: 'Nike sports',
        href: '#',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3026273-602-3.jpg?v=1680166137',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$357',
        color: 'pink',
        
      },
   
      {
        id: 5,
        name: 'Nike madvans',
        href: '#',
        imageSrc: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/2/a1d5b87f-8c33-44c8-97af-24e53d33c76a.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$152',
        color: 'multi',
        
      },
      {
        id: 6,
        name: 'Yellow Pollo',
        href: '#',
        imageSrc: 'https://www.um-art.com/wp-content/uploads/2021/06/t-shirts-homme-t-shirt-en-coton-stretch-avec-logo-brod-gomm-jaune-boss.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Yellow',
        
      },
      {
        id: 7,
        name: 'Sea Blue',
        href: '#',
        imageSrc: 'https://cdn.media.amplience.net/i/mrpricegroup/01_100791112_SI_00',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$25',
        color: 'Sea Blue',
        
      },
      {
        id: 8,
        name: 'Cream Tee',
        href: '#',
        imageSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2576fa19-0acf-490d-873c-68dd0a619872/primary-mens-dri-fit-short-sleeve-versatile-top-XK77j1.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$45',
        color: 'Cream',
        
      },
      {
        id: 9,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://media.dior.com/couture/ecommerce/media/catalog/product/v/X/1685522734_013J600A0677_C571_E11_GH.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        
      },

      
      
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Collections</h2>
  
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

                  <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button className="bg-black text-white py-2 px-5" id="flk">Quick view</button>
      </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
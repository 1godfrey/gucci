import React, {useContext, useState} from 'react';
// import product context
import {ProductContext} from '../contexts/ProductContext';
// import conponents
import Product from '../components/Product';
import Hero from '../components/Hero';
import { CgViewSplit } from 'react-icons/cg';
import {HiOutlineViewBoards} from 'react-icons/hi';

const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext);

  const [narrowView, setNarrowView] = useState(false);
 
  // get only men's & women's clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  })

  console.log(filteredProducts[3])

  if (filteredProducts[0] !== undefined) {
  // change og dataset with clothes you want by changing properties in filteredProducts
  filteredProducts[0].image = 'https://balenciaga.dam.kering.com/m/3ec5c33fb1336f8a/Square_thumbnail-542023W1GB11000_F.jpg';
  filteredProducts[6].image = 'https://balenciaga.dam.kering.com/m/49b9f012a068d116/Square_thumbnail-7416052AADB1090_F.jpg';
  filteredProducts[1].image = 'https://balenciaga.dam.kering.com/m/3dc2c8742f9e488b/Small-746478TYD311000_Y.jpg?v=1';
  filteredProducts[4].image = 'https://balenciaga.dam.kering.com/m/27ee2e98d9a41441/Square_thumbnail-685613W2RA61000_F.jpg';
  filteredProducts[2].image = 'https://balenciaga.dam.kering.com/m/43ec3295775ec641/Small-746450TOO321000_Y.jpg?v=1';
  filteredProducts[5].image = 'https://balenciaga.dam.kering.com/m/154df30b94fce56b/Square_thumbnail-534217W2CA11000_F.jpg';
  filteredProducts[3].image = 'https://balenciaga.dam.kering.com/m/330359694dd8915e/Small-747080TOS149012_Y.jpg?v=1';
  filteredProducts[7].image = 'https://balenciaga.dam.kering.com/m/5043558445cc26ea/Small-739028TOVN21055_Y.jpg?v=1';
  filteredProducts[8].image = 'https://balenciaga.dam.kering.com/m/6ca55d17981d45df/Small-745376T32751000_Z.jpg?v=1';
  filteredProducts[9].image = 'https://balenciaga.dam.kering.com/m/6ccf4deafe7ddaf6/Small-745213TNW111700_Y.jpg?v=1';

  filteredProducts[0].title = 'MENS TRACK SNEAKER IN BLACK';
  filteredProducts[6].title = 'BALENCIAGA PARIS HANDBAG';
  filteredProducts[1].title = 'SHRUNK BOMBER';
  filteredProducts[4].title = 'CHUNKY RUNNER';
  filteredProducts[2].title = 'BALENCIAGA PARIS ALL IN PARKA';
  filteredProducts[5].title = 'TRIPLE S SNEAKER';
  filteredProducts[3].title = 'BIKER BAGGY PANTS';
  filteredProducts[7].title = 'SKATER T-SHIRT OVERSIZED';
  filteredProducts[8].title = 'BIKER SWEATER';
  filteredProducts[9].title = 'REBEL PANTS';

  filteredProducts[0].description = 'Track sneaker in black mesh and nylon.';
  filteredProducts[6].description = 'Balenciaga Paris Handbag in black box calfskin with aged-silver hardware is in several looks of the Balenciaga`s Spring 23 Collection, NYC Show.';
  filteredProducts[1].description = 'Shrunk Bomber in black nylon is from the look 66 of the Balenciaga`s Summer 23 Collection.';
  filteredProducts[4].description = 'Speed Lace-Up in black knit';
  filteredProducts[2].description = 'Balenciaga Paris All In Parka in black nylon and medium curly fleece is from the look 17 of the Balenciaga`s Summer 23 Collection.';
  filteredProducts[5].description = 'Triple S Sneaker in black double foam and mesh.';
  filteredProducts[3].description = 'Biker Baggy Pants in white soft matte cowskin are from the look 9 of the Balenciaga`s Summer 23 Collection.';
  filteredProducts[7].description = 'SKATER T-SHIRT OVERSIZED';
  filteredProducts[8].description = 'Biker Sweater in black cotton rib baked knit is from the look 3 of the Balenciaga`s Summer 23 Collection.';
  filteredProducts[9].description = 'REBEL PANTS';
  }

  const gridColsClass = narrowView ? 'md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-stretch' : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-stretch';

  
  return(  
  <div>
    <Hero />
    <div className='flex items-stretch'>
  <button onClick={() => setNarrowView(!narrowView)} className='bg-gray-200 py-2 px-4 my-4 ml-4 flex flex-row gap-2'>
    VIEWS{narrowView ? <CgViewSplit size={20} /> : <HiOutlineViewBoards size={20} />} 
  </button>
  <div className='text-right text-[26px] ml-auto mr-10 font-semibold'>10 Results</div>
</div>
    <section className='w-max mx-auto justify-items-stretch'>
      <div className="container w-max mx-auto bg-white flex flex-wrap justify-items-stretch">
        <div className={`container mx-auto grid ${gridColsClass} justify-items-stretch`}>
          {filteredProducts.map(product => {
            return <Product product={product} key={product.id} />

          })};
        </div>
      </div>
    </section>
  </div>
)};

export default Home;

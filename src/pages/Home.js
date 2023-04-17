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
  filteredProducts[0].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677199549/738470_17X00_4157_001_100_0000_Light-Mens-Interlocking-G-loafer.jpg';
  filteredProducts[7].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679105811/740428_ZAMQN_2254_001_100_0000_Light-GG-cotton-tweed-jacket.jpg';
  filteredProducts[6].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1680092165/748079_ZANJE_9169_001_100_0000_Light-Retro-tweed-dress-with-chain-belt.jpg';
  filteredProducts[4].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679113017/742384_XJFGU_2270_001_100_0000_Light-GG-cotton-silk-polo-shirt.jpg';
  filteredProducts[2].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679107595/740549_XKC6C_4102_001_100_0000_Light-GG-cotton-cardigan.jpg';
  filteredProducts[3].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677281449/703147_AABZA_7505_001_100_0000_Light-Gucci-Blondie-belt.jpg';
  filteredProducts[8].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1678867267/740834_AAB1Q_2754_001_070_0000_Light-Gucci-Deco-small-shoulder-bag.jpg';
  filteredProducts[1].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1679105782/740387_ZAMYQ_4265_001_100_0000_Light-Cotton-drill-shorts-with-embroidery.jpg';
  filteredProducts[5].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1675103502/739484_AABY0_2801_001_100_0008_Light-Jumbo-GG-continental-wallet.jpg';
  filteredProducts[9].image = 'https://media.gucci.com/style/HEXD6D7D2_Center_0_0_800x800/1677176151/740655_XKC6M_4492_001_100_0000_Light-Knit-cotton-wool-sweater-with-patch.jpg';

  filteredProducts[0].title = 'MENS TRACK SNEAKER IN BLACK';
  filteredProducts[6].title = 'BALENCIAGA PARIS HANDBAG';
  filteredProducts[1].title = 'SHRUNK BOMBER';
  filteredProducts[4].title = 'CHUNKY RUNNER';
  filteredProducts[2].title = 'BALENCIAGA PARIS ALL IN PARKA';
  filteredProducts[5].title = 'TRIPLE S SNEAKER';
  filteredProducts[3].title = 'BIKER BAGGY PANTS';
  filteredProducts[7].title = 'SKATER T-SHIRT OVERSIZED';
  filteredProducts[8].title = 'BIKER SWEATER';

  filteredProducts[0].description = 'Track sneaker in black mesh and nylon.';
  filteredProducts[6].description = 'Balenciaga Paris Handbag in black box calfskin with aged-silver hardware is in several looks of the Balenciaga`s Spring 23 Collection, NYC Show.';
  filteredProducts[1].description = 'Shrunk Bomber in black nylon is from the look 66 of the Balenciaga`s Summer 23 Collection.';
  filteredProducts[4].description = 'Speed Lace-Up in black knit';
  filteredProducts[2].description = 'Balenciaga Paris All In Parka in black nylon and medium curly fleece is from the look 17 of the Balenciaga`s Summer 23 Collection.';
  filteredProducts[5].description = 'Triple S Sneaker in black double foam and mesh.';
  filteredProducts[3].description = 'Biker Baggy Pants in white soft matte cowskin are from the look 9 of the Balenciaga`s Summer 23 Collection.';
  filteredProducts[7].description = 'SKATER T-SHIRT OVERSIZED';
  filteredProducts[8].description = 'Biker Sweater in black cotton rib baked knit is from the look 3 of the Balenciaga`s Summer 23 Collection.';
  }

  const gridColsClass = narrowView ? 'md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-stretch' : 'md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-stretch';

  
  return(  
  <div>
    <Hero />
    <div className='flex items-stretch'>
  {/* <button onClick={() => setNarrowView(!narrowView)} className='bg-gray-200 py-2 px-4 my-4 ml-4 flex flex-row gap-2'>
    VIEWS{narrowView ? <CgViewSplit size={20} /> : <HiOutlineViewBoards size={20} />} 
  </button> */}
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

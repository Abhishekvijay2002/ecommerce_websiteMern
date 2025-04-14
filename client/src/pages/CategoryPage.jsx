import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'


function CategoryPage() {
  return (
    <div>
      <Carousel/>
      <section>
    <h1 className="text-3xl font-bold mb-8 text-center mt-4">Featured Products / Best sellers </h1>
    <p className='text-right m-4'>View More....</p>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </section>
    <section>
    <h1 className="text-3xl font-bold mb-8 text-center mt-4">Limited Time Deals / Offers </h1>
    <p className='text-right m-4'>View More....</p>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </section>
    <section>
    <h1 className="text-3xl font-bold mb-8 text-center mt-4">Policy & Information Section </h1>
    <div className="flex flex-wrap gap-6 justify-center">
  {/* Card 1 */}
  <div className="p-4">
    <div className="flex flex-col items-center">
      <img 
        src="https://png.pngtree.com/png-vector/20221118/ourmid/pngtree-return-package-icon-with-shadow-and-arrow-cargo-delivery-symbol-vector-png-image_41226006.jpg" 
        alt="Sample" 
        className="w-28 h-28 object-cover mb-4 rounded-full overflow-hidden"/>
      <p className="text-center text-gray-700 text-lg font-medium">
        30 Days Return Policy
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="p-4">
    <div className="flex flex-col items-center">
      <img 
        src="https://png.pngtree.com/png-vector/20221118/ourmid/pngtree-return-package-icon-with-shadow-and-arrow-cargo-delivery-symbol-vector-png-image_41226006.jpg" 
        alt="Sample" 
        className="w-28 h-28 object-cover mb-4 rounded-full overflow-hidden"/>
      <p className="text-center text-gray-700 text-lg font-medium">
        30 Days Return Policy
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="p-4">
    <div className="flex flex-col items-center">
      <img 
        src="https://png.pngtree.com/png-vector/20221118/ourmid/pngtree-return-package-icon-with-shadow-and-arrow-cargo-delivery-symbol-vector-png-image_41226006.jpg" 
        alt="Sample" 
        className="w-28 h-28 object-cover mb-4 rounded-full overflow-hidden"/>
      <p className="text-center text-gray-700 text-lg font-medium">
        30 Days Return Policy
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="p-4">
    <div className="flex flex-col items-center">
      <img 
        src="https://png.pngtree.com/png-vector/20221118/ourmid/pngtree-return-package-icon-with-shadow-and-arrow-cargo-delivery-symbol-vector-png-image_41226006.jpg" 
        alt="Sample" 
        className="w-28 h-28 object-cover mb-4 rounded-full overflow-hidden"/>
      <p className="text-center text-gray-700 text-lg font-medium">
        30 Days Return Policy
      </p>
    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default CategoryPage

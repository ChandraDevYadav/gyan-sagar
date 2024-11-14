import React from 'react'
import ProDescrip from './ProDescrip'
import Tabs from './Tabs'
import ProductFilter from '../Product/ProductFilter'
import RecentProducts from '../Product/RecentProducts'


const ProDetMain = () => {
  return (
    <div className='px-4 md:px-28 py-8 md:py-16'>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
            <div className="col-span-8 md:col-span-6">
                <ProDescrip/>
                <Tabs/>
            </div>
            <div className="col-span-8 md:col-span-2">
                <ProductFilter/>
                <RecentProducts/>
            </div>
        </div>
    </div>
  )
}

export default ProDetMain
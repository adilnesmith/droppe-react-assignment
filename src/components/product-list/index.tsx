import React, { FC } from 'react';
import lodash from 'lodash'
import Product from 'components/product'
import { ProductListProps } from 'lib/types/common'

const ProductList: FC<ProductListProps> = ({ products, onFav }) => {
  const productComponent = products?.map((_product: any, _index: number) => {
    return <Product key={_index} index={_index} product={_product} onFav={onFav} />
  })
  return (
    <section>{lodash.reverse(productComponent)}</section>
  )
}
export default ProductList
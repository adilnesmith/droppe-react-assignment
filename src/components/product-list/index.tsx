import React, { FC } from 'react';
import lodash from 'lodash'
import Product from 'components/product'
import { PostsProps } from 'lib/types/common'

const Posts: FC<PostsProps> = ({ onFav, products }) => {
  const productComponent = products?.map((_product: any, _index: number) => {
    return <Product key={_index} index={_index} product={_product} onFav={onFav} />
  })
  return (
    <section>{lodash.reverse(productComponent)}</section>
  )
}
export default Posts
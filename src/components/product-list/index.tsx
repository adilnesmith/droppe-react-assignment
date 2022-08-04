import React, { FC } from 'react';
import lodash from 'lodash'
import Product from 'components/product'
import { PostsProps } from 'lib/types/common'

const Posts: FC<PostsProps> = ({ onFav, products }) => {
  let productsarr = []
  for (const [i, p] of products.entries()) {
    productsarr.push(
      <Product key={i} index={i} product={p} onFav={onFav} />
    );
  }
  return (
    <section>{lodash.reverse(productsarr)}</section>
  )
}
export default Posts
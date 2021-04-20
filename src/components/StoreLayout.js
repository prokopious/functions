import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import ProductsProvider from "./ProductsProvider"
import CartProvider from "./CartProvider"
import * as css from "./StoreLayout.module.css"

const StoreLayout = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header cart></Header>

        <main className={css.main}>{children}</main>

  
      </CartProvider>
    </ProductsProvider>
  )
}

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StoreLayout

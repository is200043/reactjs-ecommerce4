import request from '../../utils/request'

export const cart = {
  state: {
    cartItems: [
      // {
      //   productId: 1,
      //   amount: 2
      // }
    ],
    totalPrice: 0,
  },
  reducers: {
    // handle state changes with pure functions
    // addItem(state, payload) {
    //   const item = state.cartItems.find(o => o.productId === payload);
    //   if (item) {
    //     const cartItems = state.cartItems.map(o => {
    //       if (o.productId === payload) {
    //         return {
    //           ...o,
    //           amount: o.amount + 1
    //         }
    //       }
    //       return o
    //     })
    //     return {
    //       ...state,
    //       cartItems
    //     }
    //   }
    //   return {
    //     ...state,
    //     cartItems: [{
    //       productId: payload,
    //       amount: 1
    //     }, ...state.cartItems]
    //   }
    // },
    // deleteItem(state, payload) {
    //   return state
    // },
    setCartItems(state, payload) {
      return {
        ...state,
        cartItems: payload
      }
    },
    setTotalPrice(state, payload) {
      return {
        ...state,
        totalPrice: payload
      }
    }
  },
  effects: (dispatch) => ({
    async getCartItemsAsync() {
      const res = await request.get('/carts/123456/items?include=product')
      console.log(res.data)
      const cleanData = res.data.data.map((item) => {
        return {
          id: item.id,
          productId: item.product_id,
          amount: item.quantity,
          name: item.name,
          image: 'https://via.placeholder.com/300x400.png',
          totalPrice: item.meta.display_price.with_tax.value.formatted,
          pricePerUnit: item.meta.display_price.with_tax.unit.formatted,
        }
      })
      const totalPrice = res.data.meta.display_price.with_tax.amount / 100
      dispatch.cart.setCartItems(cleanData)
      dispatch.cart.setTotalPrice(totalPrice)
    },
    async addItem(payload, rootState) {
      await request.post(`/carts/123456/items`, {
        data: payload
      })
      await dispatch.cart.getCartItemsAsync()
    },
    async deleteItem(payload, rootState) {
      await request.delete(`/carts/123456/items/${payload.id}`)
      await dispatch.cart.getCartItemsAsync()
    },
  })
}
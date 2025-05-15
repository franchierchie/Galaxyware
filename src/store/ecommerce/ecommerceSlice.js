import { createSlice } from '@reduxjs/toolkit';

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    isLoading: true,
    products: [
      /*
      category: "Monitors",
      id: "0YPBaZ5CKRSUEnC7gdug",
      image: "https://res.cloudinary.com/dii4zhpsy/image/upload/v1741135236/productPhotos/monitors/e2ef0pognodkvs8mp58v.jpg",
      name: "GIGABYTE - GS32QC - 32\" VA Curved Gaming Monitor - QHD 2560x1440 - 165Hz/OC 170Hz - 1ms MPRT - AMD FreeSync Premium - HDMI, DP - Black",
      options: [''],
      price: {
        current: 266.19,
        discount: 0.12,
      },
      specs: [ "Resolution & Panel: 32\" QHD 2560x1440 Curved VA Gaming Monitor.", "Refresh Rate & Response: 165Hz/OC 170Hz refresh rate, 1ms MPRT response time.", "Color Accuracy: 109% sRGB, 8 bit.", "Special Features: HDR Ready, TÜV Rheinland Certified, HBR3, AMD FreeSync Premium.", "Connectivity: 2x HDMI 2.0, 1x Displayport 1.4, 1x Earphone Jack.", "VESA Wall Mount Compatible 100*100mm.", "Accessories: Power cables, DP cable, QSG, Warranty card." ]
      */
    ],
    filters: [],
    sorting: 'default',
    cart: [],
  },
  reducers: {
    setProducts: ( state, { payload } ) => {
      state.isLoading = false;
      state.products = payload;
    },
    setFilters: ( state, { payload } ) => {
      state.filters = payload;
    },
    filterProducts: ( state, { payload } ) => { // payload.productsArray === array with all the products
      state.filters = payload.filtersArray;
      const filteredProducts = payload.productsArray.filter(product =>
        state.filters.includes( product.category.toLowerCase() )
      );
      state.products = filteredProducts;
    },
    setToCart: ( state, { payload } ) => {
      state.cart = payload;
    },
    clearCart: ( state ) => {
      state.cart = [];
    },
    clearEcommerceSliceLogOut: ( state ) => {
      state.isLoading = true;
      state.products = [];
      state.filters = [];
      state.sorting = 'default';
      state.cart = [];
    },
  }
});


// Action creators are generated for each case reducer function
export const { setProducts, setFilters, filterProducts, setToCart, clearCart, clearEcommerceSliceLogOut } = ecommerceSlice.actions;
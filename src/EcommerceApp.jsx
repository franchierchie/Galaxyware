import { AppRouter } from './router';

import { loadProducts } from './helpers';

export const EcommerceApp = () => {

  loadProducts();

  return (
    <>
      <AppRouter />
    </>
  )
}

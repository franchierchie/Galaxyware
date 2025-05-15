import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

import { localStorageManagement } from './localStorageManagement';
import { localStorageNameValues } from '../ecommerce';

export const loadProducts = async() => {
  // Check if we have cached products
  const cachedProducts = localStorageManagement( localStorageNameValues.galaxyware__products );
  
  // Use cache if it exists
  if ( cachedProducts.length > 0 ) {
    return {
      products: cachedProducts
    }
  }

  // Otherwise, fetch from Firestore
  const collectionRef = collection(FirebaseDB, 'productsDB');
  const docs = await getDocs(collectionRef);

  const products = [];
  docs.forEach(doc => {
    products.push({ id: doc.id, ...doc.data() })
  });

  // Cache the results
  localStorageManagement( localStorageNameValues.galaxyware__products, products );

  return { products };
}

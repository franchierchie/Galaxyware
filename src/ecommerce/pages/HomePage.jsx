import { useSelector } from 'react-redux';
import { CategoryCard, HeroBanner, ProductCard } from '../components';
import { categories } from '../data';
import { Section } from '../layout';

export const HomePage = () => {
  const { products, isLoading } = useSelector(state => state.ecommerce);

  return (
    <>
      <HeroBanner />

      <Section
        title="Categories"
        cssClass="categories-wrapper"
        cssWrapperClass={ false }
      >
        {
          categories.map(category => (
            <CategoryCard
              key={ category.value }
              categoryName={ category.name }
              categoryIcon={ category.icon }
            />
          ))
        }
      </Section>

      <Section
        title="Deals"
        cssClass="product-wrapper"
        cssWrapperClass={ false }
      >
        {
          ( !isLoading )
            ? products.filter(prod => prod.price.discount).map(prod => (
                <ProductCard
                  key={ prod.id }
                  { ...prod }
                />
            ))
            : <p>Loading...</p>
        }
      </Section>
    </>
  )
}

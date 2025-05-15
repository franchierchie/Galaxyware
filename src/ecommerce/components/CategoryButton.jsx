import { categories } from '../data';
import { useCategoryButton } from '../../hooks/useCategoryButton';

export const CategoryButton = () => {
  const { addFilter, inputState, showAllButton } = useCategoryButton();

  return (
    <>
      <button
        className="category"
        value="showAll"
        onClick={ showAllButton }
      >
        All categories
      </button>

      {
        categories.map(category => (
          <label
            key={ category.value }
            htmlFor={ category.value }
            className="category"
          >
            <input
              type="checkbox"
              id={ category.value }
              value={ category.value }
              onChange={() => addFilter( category.name, category.value )}
              checked={!!inputState[category.value]}
            />
            <p>{ category.name }</p>
          </label>
        ))
      }
    </>
  )
}

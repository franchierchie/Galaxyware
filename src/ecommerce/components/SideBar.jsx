import { CategoryButton } from './CategoryButton';

export const SideBar = ({ sideMenuOpen, handleClick }) => {
  
  return (
    <aside
      className="side-bar"
      data-open={ sideMenuOpen }
    >
      <button
        className="close"
        onClick={ handleClick }
      >
        <img src="./icons/x.svg" alt="close filters" />
      </button>

      <CategoryButton />
    </aside>
  )
}

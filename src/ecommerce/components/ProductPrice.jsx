
export const ProductPrice = ({ price }) => {
  return (
    <div className="price" data-price={(price?.discount) ? true : false}>
      <p className="current">${ price?.current.toFixed(2) }</p>
      {
        (price?.discount)
          && (<p className="discount">${ (price?.current / (1 - price?.discount)).toFixed(2) }</p>)
      }
    </div> // close price
  )
}

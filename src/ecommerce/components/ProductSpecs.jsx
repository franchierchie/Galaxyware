
export const ProductSpecs = ({ specs = [] }) => {
  return (
    <>
    {
      ( specs.length > 1 )
      && (
        <>
          <hr />

          <div className="product-page__specs product-page__section">
            <h3>Specs</h3>
            
            <ul>
              { specs.map(spec => (
                <li key={ spec }>{ spec }</li>
              ))}
            </ul>
          </div> {/* close product-page__specs product-page__section */}
        </>
      )
    }
    </>
  )
}

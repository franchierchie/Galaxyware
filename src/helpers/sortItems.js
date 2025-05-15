
export const sortItems = ( sortBy, items ) => {
  const list = [...items].sort((a, b) => {
    const priceDiff = 
      sortBy === 'lowHigh'
        ? a.price.current - b.price.current
        : sortBy === 'highLow'
        ? b.price.current - a.price.current
        : items;

    if (priceDiff !== 0) return priceDiff;

    // If prices are equal, sort by discount (discounted items first)
    const discountA = a.price.discount || 0;
    const discountB = b.price.discount || 0;

    return discountB - discountA; // higher discount first
  });

  return list;
}

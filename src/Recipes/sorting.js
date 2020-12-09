export const methods = {
  rating: 'Rating(low to high)',
  movieTitle: 'MovieTitle(A-Z)',
  timestamp: 'Timestamp(old to new)',
};

export const sort = ({ by, list }) => {
  return [...list].sort( (a, b) => a[by] >= b[by] ? 1 : -1 );
};
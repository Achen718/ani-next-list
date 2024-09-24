export const getCurrentSeason = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() returns 0-11

  let season;
  if (month >= 3 && month <= 5) {
    season = 'spring';
  } else if (month >= 6 && month <= 8) {
    season = 'summer';
  } else if (month >= 9 && month <= 11) {
    season = 'fall';
  } else {
    season = 'winter';
  }

  return { year, season };
};

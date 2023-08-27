
//get random rating count
export const getRandomReviewCount = (max: number) => Math.floor(Math.random() * (max + 1))

//Get random user rating
export const getRandomUserRating = (): number => Math.floor(Math.random() * 5) + 1;

//Get random date
export const getRandomDate = (): string => {
  const start = new Date(2010, 0, 1); // Start date
  const end = new Date(); // Current date

  const randomTimestamp =
    Math.random() * (end.getTime() - start.getTime()) + start.getTime();
  const randomDate = new Date(randomTimestamp);

  return randomDate.toLocaleDateString("en-UK");
};

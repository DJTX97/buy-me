//get random rating count
export const getRandomReviewCount = (max: number) =>
  Math.floor(Math.random() * (max + 1));

//Get random user rating
export const getRandomUserRating = (): number =>
  Math.floor(Math.random() * 5) + 1;

//Get random date
export const getRandomDate = (() => {
  let previousDate: Date | null = null;

  return (): string => {
    const start = new Date(2018, 0, 1); // Start date
    const end = new Date(); // Current date

    let randomTimestamp;
    let randomDate;

    if (previousDate) {
      randomTimestamp =
        Math.random() * (previousDate.getTime() - start.getTime()) +
        start.getTime();
      randomDate = new Date(randomTimestamp);
    } else {
      randomTimestamp =
        Math.random() * (end.getTime() - start.getTime()) + start.getTime();
      randomDate = new Date(randomTimestamp);
    }

    previousDate = randomDate;

    return randomDate.toLocaleDateString("en-UK");
  };
})();

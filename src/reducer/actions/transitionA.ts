export const transitionNewPage = (newPage: boolean) => {
  return {
    type: "NEW_PAGE",
    payload: newPage,
  };
};

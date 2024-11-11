const Next = (setProductSlider, handelNumpercomponant) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
  setProductSlider((prev) => ({
    maxLimit: prev.maxLimit + handelNumpercomponant,
    minLimit: prev.maxLimit,
    numItems: prev.numItems - handelNumpercomponant,
  }));
};
export default Next;

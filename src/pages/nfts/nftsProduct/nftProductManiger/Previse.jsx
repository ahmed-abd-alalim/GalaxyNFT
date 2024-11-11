const Previse = (setProductSlider, handelNumpercomponant) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
  setProductSlider((prev) => ({
    maxLimit: prev.maxLimit - handelNumpercomponant,
    minLimit: prev.minLimit - handelNumpercomponant,
    numItems: prev.numItems + handelNumpercomponant,
  }));
};
export default Previse;

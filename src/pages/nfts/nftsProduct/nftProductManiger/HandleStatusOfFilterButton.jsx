const HandleStatusOfFilterButton = (Findex, Sindex, setNfsData) => {
  setNfsData((prevData) => {
    const updatedData = prevData.NFTsMarket.FilterSliderItem.map(
      (item, index) => {
        if (index === Findex) {
          const updatedFilterItems = item.filterItems.map((filterItem, idx) => {
            if (idx === Sindex) {
              const newState =
                filterItem.filterItemState === "active" ? "" : "active";
              return { ...filterItem, filterItemState: newState };
            }
            return filterItem;
          });
          return { ...item, filterItems: updatedFilterItems };
        }
        return item;
      }
    );

    const currentItemName =
      prevData.NFTsMarket.FilterSliderItem[Findex]?.filterItems[Sindex]
        ?.filterItemName;

    let updatedFilterItems = prevData.NFTsMarket.FilterItems || [];

    if (currentItemName) {
      if (updatedFilterItems.includes(currentItemName)) {
        updatedFilterItems = updatedFilterItems.filter(
          (item) => item !== currentItemName
        );
      } else {
        updatedFilterItems = [...updatedFilterItems, currentItemName];
      }
    }

    return {
      ...prevData,
      NFTsMarket: {
        ...prevData.NFTsMarket,
        FilterSliderItem: updatedData,
        FilterItems: updatedFilterItems,
      },
    };
  });
};
export default HandleStatusOfFilterButton;

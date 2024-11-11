import "./filterSlider.css";
import { CiSaveUp1 } from "react-icons/ci";
import { TbSortAscending2 } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import { PiCrownSimple } from "react-icons/pi";
import { LuShapes } from "react-icons/lu";

const FilterSlider = ({ Data, setData }) => {
  const iconnButtonFilter = {
    "Sort by:": TbSortAscending2,
    "License:": PiCrownSimple,
    "NFTs type:": LuShapes,
  };

  const HandelCloseFilterButton = () => {
    document.querySelector(".FilterSliderDeep").style.transform =
      "translate(0, -105%)";
  };

  const HandleStatusOfFilterButton = (Findex, Sindex) => {
    setData((prevData) => {
      const updatedData = prevData.NFTsMarket.FilterSliderItem.map(
        (item, index) => {
          if (index === Findex) {
            const updatedFilterItems = item.filterItems.map(
              (filterItem, idx) => {
                if (idx === Sindex) {
                  const newState =
                    filterItem.filterItemState === "active" ? "" : "active";
                  return { ...filterItem, filterItemState: newState };
                }
                return filterItem;
              }
            );
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

  const HandelClearALLButton = () => {
    // First, clear filterItems
    setData((prevData) => ({
      ...prevData,
      NFTsMarket: {
        ...prevData.NFTsMarket,
        FilterItems: [],
      },
    }));

    // Then, update filterItemState to empty strings
    setData((prevData) => ({
      ...prevData,
      NFTsMarket: {
        ...prevData.NFTsMarket,
        FilterSliderItem: prevData.NFTsMarket.FilterSliderItem.map(
          (section) => ({
            ...section,
            filterItems: section.filterItems.map((item) => ({
              ...item,
              filterItemState: "",
            })),
          })
        ),
      },
    }));
  };

  return (
    <section id="FilterSlider">
      <div className="FilterSliderDeep">
        <div className="FilterSliderCircle" />
        <div className="pt-3 pb-3 fristPart">
          <div className="d-flex justify-content-between align-items-center mx-3">
            <div className="d-flex gap-2 align-items-center">
              <div className="IoCloseButton" onClick={HandelCloseFilterButton}>
                <CiSaveUp1 className="CiSaveUp1" />
              </div>
              <span className="F1">Filters</span>
            </div>
            <div
              className="F1 d-flex gap-2 align-items-center clearAll py-2 px-3"
              onClick={HandelClearALLButton}
            >
              Clear all
              <MdDeleteForever />
            </div>
          </div>
        </div>
        <div className="bodyOfFilterSlider mx-3 mt-4">
          {Data.FilterSliderItem.map((item, Findex) => {
            const FilterIcon = iconnButtonFilter[item.filterTitlel];
            return (
              <div key={Findex} className="d-flex mt-4 py-2">
                <div className="FilterItemComponant">
                  <div className="d-flex align-items-center gap-2 F3">
                    <FilterIcon />
                    {item.filterTitlel}
                  </div>
                  <div className="d-flex flex-wrap FilterItemBody F3">
                    {item.filterItems.map((filterItem, Sindex) => (
                      <span
                        key={Sindex}
                        className={`me-3 py-2 px-3 ${filterItem.filterItemState} mt-3`} // Add active state class here
                        onClick={() =>
                          HandleStatusOfFilterButton(Findex, Sindex)
                        } // Handle click to toggle state
                      >
                        {filterItem.filterItemName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FilterSlider;

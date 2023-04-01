import { renderProductList } from "./renderProductList";

export const applyFilterFunctionality = () => {
  // apply functionalities for filter
  const filterInput = document.querySelector("#filter-product");
  const filterButton = document.querySelector("#submit-filter");
  const clearFilterButton = document.querySelector("#clear-filter");

  filterButton.addEventListener("click", () => {
    const filterValue = filterInput.value;

    renderProductList(filterValue);
  });

  clearFilterButton.addEventListener("click", () => {
    renderProductList("");
  });
};

import { applyFilterFunctionality } from "./filterProduct";
import { applyPopupFormFunctionality } from "./handlePopupForm";

import { renderProdcutList } from "./renderProductList";

// runner / business function
const renderCommunityApp = async () => {
  const layoutUI = `
    <div class="filter">
      <input type="text" id="filter-product" placeholder="filter community" />
      <button id="submit-filter">Filter</button>
      <button id="clear-filter">Clear Filter</button>
      <button id="create-product">Create New Product</button>
    </div>
    <div id="product-list"></div>
    <div id="product-popup-form">
      <button id="close-popup">close</button>
      <form>
        <input type="hidden" id="save-product-type" />
        <input type="hidden" id="input-product-id" />
        <label>
          <span>Community Name</span>
          <input id="input-product-title" type="text">
        </label>
        <br/>
        <label>
          <span>Product Message</span>
          <input id="input-product-message" type="text">
        </label>
        <br/>

        <button id="save-product-button">Save</button>
      </form>
    </div>
  `;

  // inject the UI to the container
  const productContainer = document.querySelector("#product-container");

  communityContainer.innerHTML = layoutUI;

  // first load
  renderProductList("");

  // apply functionality
  applyFilterFunctionality();

  // apply popup functionality
  applyPopupFormFunctionality();
};

addEventListener("DOMContentLoaded", () => {
  renderProductApp();
});

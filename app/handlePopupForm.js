import { createProduct } from "../services/createProduct";
import { updateProductById } from "../services/updateProductById";
import { renderProductList } from "./renderProductList";

export const applyPopupFormFunctionality = () => {
  // OPEN-CLOSE Popup Functionality
  const openPopupButton = document.querySelector("#create-product");
  const closePopupButton = document.querySelector("#close-popup");

  openPopupButton.addEventListener("click", () => {
    const popup = document.querySelector("#product-popup-form");

    document.querySelector("#save-product-type").value = "create";

    // empty form fields
    const titleInput = document.querySelector("#input-product-title");
    const messageInput = document.querySelector("#input-product-message");

    titleInput.value = "";
    messageInput.value = "";

    popup.style.display = "block";
  });

  closePopupButton.addEventListener("click", () => {
    const popup = document.querySelector("#product-popup-form");

    popup.style.display = "none";
  });

  // Form submissions Functionality
  const saveCommunityButton = document.querySelector("#save-community-button");

  saveCommunityButton.addEventListener("click", async (e) => {
    e.preventDefault(); // to prevent form to reload somewhere

    const id = document.querySelector("#input-product-id").value;
    const title = document.querySelector("#input-product-title").value;
    const message = document.querySelector("#input-product-message").value;

    const saveType = document.querySelector("#save-product-type").value;

    if (saveType === "create") {
      await createProduct({ title, message });
    }

    if (saveType === "update") {
      await updateProductById({ title, message, id });
    }

    renderProductList("");

    const popup = document.querySelector("#product-popup-form");

    popup.style.display = "none";
  });
};

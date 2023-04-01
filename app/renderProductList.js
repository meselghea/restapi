import { deleteProductById } from "../services/deleteProductById";
import { getAllProducts } from "../services/getProducts";
import { getProductById } from "../services/getProductById";

// generate card component / template
const ProductCardComponent = (productData) => {
  return `
    <div class="card">
      <h2>${proudctData.title}</h2>
      <p>${productData.message}</p>
      <button class="show-popup" id="card-${productData.id}">Show</button>
      <button class="delete-popup" id="card-${productData.id}">Delete</button>
    </div>
  `;
};

export const renderProductList = async (keyword) => {
  const data = await getAllProducts(keyword);

  const communityCardList = data.map((community) =>
    communityCardComponent(community)
  );

  const cardListWrapper = document.querySelector("#community-list");

  cardListWrapper.innerHTML = communityCardList.join("");

  const showPopup = document.querySelectorAll(".show-popup");

  showPopup.forEach((card) => {
    card.addEventListener("click", async () => {
      const cardId = card.attributes.id.value.slice(5);

      const data = await getCommunityById(cardId);

      document.querySelector("#save-community-type").value = "update";
      document.querySelector("#input-community-id").value = cardId;

      const popup = document.querySelector("#community-popup-form");

      popup.style.display = "block";

      // populate fields into the form
      const titleInput = document.querySelector("#input-community-title");
      const messageInput = document.querySelector("#input-community-message");

      titleInput.value = data.title;
      messageInput.value = data.message;
    });
  });

  const deletePopup = document.querySelectorAll(".delete-popup");

  deletePopup.forEach((card) => {
    card.addEventListener("click", async () => {
      const cardId = card.attributes.id.value.slice(5);

      await deleteCommunityById(cardId);

      renderCommunityList("");
    });
  });
};

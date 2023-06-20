/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpacks from "./components/data.js";

const articles = backpacks.map((pack) => {
  const content = `
    <figure class="backpack__image">
      <img src=${pack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${pack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        pack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        pack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${pack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        pack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        pack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        pack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        pack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

  const packArticle = document.createElement("article");
  packArticle.classList.add("backpack");
  packArticle.setAttribute("id", pack.id);
  packArticle.innerHTML = content;

  return packArticle;
});

const main = document.querySelector(".maincontent");
articles.forEach((item) => main.append(item));

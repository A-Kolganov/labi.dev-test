import templ from "../../templates/list-template.hbs";
import { showTxt } from "../view/showTxt";

function displayItems(e) {
  const appendMain = document.querySelector(".search-list__list");

  fetch("https://my-json-server.typicode.com/A-Kolganov/labi.dev-test/db")
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      data.posts.forEach(item => {
        appendMain.insertAdjacentHTML("afterbegin", templ(item));
        const rating = document.querySelector(
          ".search-item__rating-cover__gold"
        );
        rating.setAttribute(
          "style",
          "width:" + Number(item.client.rating) * 20 + "%"
        );

        const txtBox = document.querySelector(".search-item__title__txt");

        if (item.description.length > 350) {
          txtBox.textContent = item.description.slice(0, 300) + "...";
          const txtElse = item.description.slice(300);
          txtBox.insertAdjacentHTML(
            "beforeend",
            '<a href="#" class=" search-item__title__txt__btn" >more</a>'
          );
          const showMoreBtn = document.querySelector(
            ".search-item__title__txt__btn"
          );
          showMoreBtn.addEventListener("click", showTxt);
          txtBox.insertAdjacentHTML(
            "afterend",
            '<p class="search-item__title__txt__hidden" style="display: none">' +
              txtElse +
              "</p>"
          );
        } else {
          txtBox.textContent = item.description;
        }
      });
    })
    .catch(err => console.log(err));
}

export { displayItems };

var Search_input = document.querySelector(".Search_input")
var Search_click = document.querySelector(".Search_click")
var main_container = document.querySelector(".main_container")
var loadMore = document.querySelector(".loadMore")
let My_api = "0iETl_GKfmnw2ye-9E-m1cl3afHgeNgOHOS6-J892A8";
let page_no = 1;
async function fecth_image(query, page) {
               let url = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${page}&client_id=${My_api}`);
               let response = await url.json();
               console.log(response);
               response.results.forEach(photo => {
                              const Image_div = document.createElement("div")
                              Image_div.classList.add("Image")
                              Image_div.innerHTML = `<img src="${photo.urls.regular}"/>`
                              console.log(photo.urls.regular);
                              const Image_overLay = document.createElement("div")
                              Image_overLay.classList.add("overlay")
                              Image_overLay.innerHTML = `
                                                            <h3>${photo.alt_description}</h3>`
                              Image_div.appendChild(Image_overLay)
                              main_container.appendChild(Image_div)
                              loadMore.style.display = "block";
               });
}

Search_click.addEventListener("click", () => {
               let input_value = Search_input.value;
               console.log(input_value);
               fecth_image(input_value, page_no)
})

loadMore.addEventListener("click", () => {
               fecth_image(Search_input.value, page_no++);
})
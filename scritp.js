const accessKey = "BzVy4En-yYTBx8u1FVYgCfBSYv2PXsSZJOwag3aMY9g";

const searchForm = document.getElementById("search");
const searchbox = document.getElementById("search-box");
const searchres = document.getElementById("search-result");
const searchmore = document.getElementById("load-more");

let keyword = "";
let page = 1;

async function searchImage(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(page==1){
        searchres.innerHTML = "";
    }

    const results = data.results;
   results.map((result)=>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchres.appendChild(imageLink);
   })
   searchmore.style.display = "block" ;
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})

searchmore.addEventListener("click",()=>{
        page++;
        searchImage();
})
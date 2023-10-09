const categoryList = document.querySelector("#categories").children;
const categoryItemsLength = categoryList.length;
console.log(`Number of categories: ${categoryItemsLength}`);

[...categoryList].forEach((item) => {
    const title = item.firstElementChild;
    const elements = title.nextElementSibling.children;

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elements.length}`);
});


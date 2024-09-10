export async function getAllProducts() {
  return await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
}
export async function productById({ id }) {
  return await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
}

export async function categoryProduct({ id }) {
  return await fetch(`https://dummyjson.com/products/category/${id}`).then(
    (res) => res.json()
  );
}

export async function getCategories() {
  return await fetch("https://dummyjson.com/products/categories").then((res) =>
    res.json()
  );
}

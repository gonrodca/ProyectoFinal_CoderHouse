export async function singleProduct({ id }) {
  return await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
}

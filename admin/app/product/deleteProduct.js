function handleDeleteProduct(id) {
  product.deleteProduct(id).then(() => {
    const deleteItem = document.querySelector(".product_item-" + id);
    if (deleteItem) {
      deleteItem.remove();
    }
  });
}

function handleDeleteOrder(id) {
  order.deleteOrder(id).then(() => {
    const deleteItem = document.querySelector(".order_item-" + id);
    if (deleteItem) {
      deleteItem.remove();
    }
  });
}

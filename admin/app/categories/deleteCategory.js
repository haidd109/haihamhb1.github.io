// Xóa
function handleDeleteCate(id) {
  cate.deleteCategory(id).then(() => {
    const deleteItem = document.querySelector(".cate_item-" + id);
    if (deleteItem) {
      deleteItem.remove();
    }
  });
}

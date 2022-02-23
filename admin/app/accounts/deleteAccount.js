function handleDeleteAccount(id) {
  account.deleteAccount(id).then(() => {
    const deleteItem = document.querySelector(".account_item-" + id);
    if (deleteItem) {
      deleteItem.remove();
    }
  });
}

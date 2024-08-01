// Load stored bucket list items on page load
// document.addEventListener('DOMContentLoaded', () => {
//   const storedItems = JSON.parse(localStorage.getItem('bucketItems')) || [];
//   const list = document.getElementById('bucketList');

//   storedItems.forEach(item => {
//     const listItem = createListItem(item);
//     list.appendChild(listItem);
//   });
// });
window.onload = () => {
  const storedItems = JSON.parse(localStorage.getItem('bucketItems')) || [];
  const list = document.getElementById('bucketList');

  storedItems.forEach(item => {
    const listItem = createListItem(item);
    list.appendChild(listItem);
  });
};

// Add bucket item and update localStorage
function addBucketItem() {
  const input = document.getElementById('bucketItem');
  const item = input.value.trim();
  if (item !== '') {
    const listItem = createListItem(item);
    const list = document.getElementById('bucketList');
    list.appendChild(listItem);

    const storedItems = JSON.parse(localStorage.getItem('bucketItems')) || [];
    storedItems.push(item);
    localStorage.setItem('bucketItems', JSON.stringify(storedItems));

    input.value = '';
  }
}

// Create a list item with delete button
function createListItem(item) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    ${item}
    <button class="delete-btn" onclick="deleteBucketItem(this)">X</button>
  `;
  return listItem;
}

// Delete bucket item and update localStorage
function deleteBucketItem(button) {
  const listItem = button.parentElement;
  const list = document.getElementById('bucketList');
  list.removeChild(listItem);

  const storedItems = JSON.parse(localStorage.getItem('bucketItems')) || [];
  const itemText = listItem.firstChild.textContent.trim();
  const updatedItems = storedItems.filter(item => item !== itemText);
  localStorage.setItem('bucketItems', JSON.stringify(updatedItems));
}


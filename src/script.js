const form = document.querySelector('form');
const input = document.querySelector('#new-todo');
const ul = document.querySelector('#todo-list');
const clearButton = document.querySelector('#clear-button');


form.addEventListener('submit', function(event) {
  event.preventDefault(); // formun varsayılan davranışını engelle
  
  if (input.value.length === 0) {
    return; // boş todo eklemeyi engelle
  }
  
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const button = document.createElement('button');
  
  checkbox.type = 'checkbox';
  label.textContent = input.value;
  button.textContent = 'Remove';
  
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);
  ul.appendChild(li);
  
  input.value = ''; // input alanını temizle
});

ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove(); // todo listesinden todoyu kaldır
  }
});

clearButton.addEventListener('click', function() {
  ul.innerHTML = ''; // todo listesini temizle
});

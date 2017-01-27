
//user clicked on the add button
//if there is any text inside the item field, add that to the todo list.
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) addItemTodo(value);
});

function addItemTodo(text){
  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');
}

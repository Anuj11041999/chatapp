
var btn = document.getElementById('add')
add.addEventListener('click',additem)

var itemList = document.getElementById('expenses');
itemList.addEventListener('click',expense)
function additem(e){
    e.preventDefault();

    var newItem = document.getElementById('amount').value;
    var newDescription = document.getElementById('description').value;
    var newCategory = document.getElementById('category').value;
      // Create new li element
    var li = document.createElement('li');
      // Add class
    li.className = 'list-group-item';
      // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDescription));
    li.appendChild(document.createTextNode(newCategory));
    
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-sm float-right'
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);
      // Create del button element
    var deleteBtn = document.createElement('button');
    
      // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
      // Append text node
    deleteBtn.appendChild(document.createTextNode('delete'));
    
      // Append button to li
    li.appendChild(deleteBtn);
    
      
    
      // Append li to list
    itemList.appendChild(li);
    console.log(itemList)
}

function expense(e){
    if(e.target.tagName==='BUTTON'){
        const btn = e.target;
        const li = btn.parentNode;
        const ul = li.parentNode;
        if(btn.textContent ==='delete'){
            ul.removeChild(li);
        }else if(btn.textContent ==='edit'){
            const amount = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = amount.textContent;
            li.insertBefore(input,amount);
            li.removeChild(amount);
            btn.textContent = 'save'
        }else if(btn.textContent === 'save'){
            const input = li.firstElementChild;
            const amount = document.createElement('amount');
            amount.textContent = input.value;
            li.insertBefore(amount,input);
            li.removeChild(input);
            btn.textContent = 'edit';
        }
    }
}

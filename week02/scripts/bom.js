const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

input.focus();


button.addEventListener('click', function() {
    console.log(input.value);
    
    if (input.value.trim() !== '')
    {
        
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        console.log("we passed the blank test")
        deleteButton.textContent ="❌";
        li.textContent = input.value;
        li.append(deleteButton);
        deleteButton.addEventListe

        deleteButton.addEventListener('click', function() {
            console.log("Delete button pressed");
            list.removeChild(li);
            input.focus();
        });

        list.append(li); 
        
        input.value = '';
        input.focus();
    }
        
});


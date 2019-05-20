'use strict';

const data = {
  'Рыбы': {
    'Форель': {},
    'Щука': {}
  },

  'Деревья': {
    'Хвойные': {
      'Лиственница': {},
      'Ель': {}
    },
    'Цветковые': {
      'Берёза': {},
      'Тополь': {}
    }
  }
};


function createTree(container, data) {

  Object.keys(data).forEach(function(key){
      
    if(key.hasOwnProperty) {
      const li = document.createElement('li');
      const ul = document.createElement('ul');
      li.appendChild(document.createTextNode(key));
      container.appendChild(li);

      if(data[key].hasOwnProperty) {
        li.appendChild(ul);
      }

      createTree(ul, data[key]);
    }
  })
}

const container =  document.getElementById('container').appendChild(document.createElement('ul'));
createTree(container, data);

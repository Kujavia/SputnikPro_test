/*функция для доп.сведений*/
function showContent(value) {
  const contentDiv = document.getElementById('mainContent');
  switch (value) {
      case 'action':
          fetch('/src/html/action.html')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Модуль не отвечает');
                  }
                  return response.text();
              })
              .then(data => {
                  contentDiv.innerHTML = data;
              })
              .catch(error => {
                  console.error('Ошибка при загрузке файла:', error);
                  contentDiv.innerHTML = 'Ошибка при загрузке';
              });
          break;
      case 'content2':
          contentDiv.innerHTML = '<h2>Содержимое 2</h2><p>Это текст для содержимого 2.</p>';
          break;
      case 'content3':
          contentDiv.innerHTML = '<h2>Содержимое 3</h2><p>Это текст для содержимого 3.</p>';
          break;
      case 'content4':
          contentDiv.innerHTML = '<h2>Содержимое 4</h2><p>Это текст для содержимого 4.</p>';
          break;
      case 'content5':
          contentDiv.innerHTML = '<h2>Содержимое 5</h2><p>Это текст для содержимого 4.</p>';
          break;
      case 'content6':
          contentDiv.innerHTML = '<h2>Содержимое 6</h2><p>Это текст для содержимого 4.</p>';
          break;
      case 'content7':
          contentDiv.innerHTML = '<h2>Содержимое 7</h2><p>Это текст для содержимого 4.</p>';
          break;
      case 'content8':
              contentDiv.innerHTML = '<h2>Содержимое 8</h2><p>Это текст для содержимого 4.</p>';
              break;
      default:
          contentDiv.innerHTML = 'Пожалуйста, выберите пункт из выпадающего списка.';
  }
}

/*функция для меню параметры прогнозирования*/
function showContent_parameters() {
  const mainContent = document.getElementById('mainContent');
//    return mainContent.innerHTML = '<h2>Параметры прогнозирования</h2><p>Здесь будет информация о параметрах прогнозирования.</p>';
      fetch('./src/html/parameters.html')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Модуль не отвечает');
              }
              return response.text();
          })
          .then(data => {
              mainContent.innerHTML = data;
          })
          .catch(error => {
              console.error('Ошибка при загрузке файла:', error);
              contentDiv.innerHTML = 'Ошибка при загрузке';
          });
}




function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function selectOption(value) {
  const selectedOptionDiv = document.getElementById('selectedOption');
  // selectedOptionDiv.innerText = `Вы выбрали: ${value}`;

  const contentDiv = document.getElementById('mainContent');
  switch (value) {
      case 'content8':
          fetch('/src/html/action.html')
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Модуль не отвечает');
                  }
                  return response.text();
              })
              .then(data => {
                  contentDiv.innerHTML = data;
              })
              .catch(error => {
                  console.error('Ошибка при загрузке файла:', error);
                  contentDiv.innerHTML = 'Ошибка при загрузке';
              });
          break;
      case 'content9':
          contentDiv.innerHTML = '<h2>Содержимое 2</h2><p>Это текст для содержимого 2.</p>';
          break;
      case 'content3':
          contentDiv.innerHTML = '<h2>Содержимое 3</h2><p>Это текст для содержимого 3.</p>';
          break;
      case 'content4':
          contentDiv.innerHTML = '<h2>Содержимое 4</h2><p>Это текст для содержимого 4.</p>';
          break;
      case 'content5':
          contentDiv.innerHTML = '<h2>Содержимое 5</h2><p>Это текст для содержимого 4.</p>';
          break;
      case 'content6':
          contentDiv.innerHTML = '<h2>Содержимое 6</h2><p>Это текст для содержимого 4.</p>';
          break;
      case 'content7':
          contentDiv.innerHTML = '<h2>Содержимое 7</h2><p>Это текст для содержимого 4.</p>';
          break;
      case 'content8':
              contentDiv.innerHTML = '<h2>Содержимое 8</h2><p>Это текст для содержимого 4.</p>';
              break;
      default:
          contentDiv.innerHTML = 'Пожалуйста, выберите пункт из выпадающего списка.';
  }
  // Закрыть выпадающий список после выбора
  // document.getElementById('dropdownMenu').style.display = 'none';
}

// Закрытие выпадающего списка при клике вне его
window.onclick = function(event) {
  if (!event.target.matches('#dropdownButton')) {
      const dropdowns = document.getElementsByClassName("dropdown-menu");
      for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.style.display === 'block') {
              openDropdown.style.display = 'none';
          }
      }
  }
}

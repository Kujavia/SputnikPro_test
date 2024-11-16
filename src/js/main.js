// Функция для отображения контента
window.showContent = function(value) {
    const contentDiv = document.getElementById('mainContent');
    switch (value) {
        case 'action':
            fetch('./src/html/action.html')
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
        case 'content8':
            contentDiv.innerHTML = '<h2>Содержимое 8</h2><p>Это текст для содержимого 8.</p>';
            break;
        default:
            contentDiv.innerHTML = 'Пожалуйста, выберите пункт из выпадающего списка.';
    }
};

// Функция для отображения параметров
window.showContent_parameters = function() {
    const mainContent = document.getElementById('mainContent');
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
            mainContent.innerHTML = 'Ошибка при загрузке';
        });
};


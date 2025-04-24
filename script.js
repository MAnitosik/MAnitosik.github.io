document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс выбранной кнопке
            button.classList.add('active');
            
            // Получаем выбранный язык
            const lang = button.dataset.lang;
            
            // Фильтруем категории
            document.querySelectorAll('.category').forEach(category => {
                if(lang === 'all' || category.dataset.lang.includes(lang)) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });
});

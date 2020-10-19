const favoriteBtn = document.querySelectorAll('.card__favorite ');
const compareBtn = document.querySelectorAll('.card__compare');

let favoriteCount = 0;
favoriteBtn.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        const counter = document.querySelector('.favorites .counter');
        if (elem.getAttribute('data-state') === '1') {
            elem.setAttribute('data-state', '0')
            elem.children[1].innerHTML = 'В избранноe';
            favoriteCount--;
        } else {
            elem.setAttribute('data-state', '1')
            elem.children[1].innerHTML = 'В избранном';
            favoriteCount++;
        }
        favoriteCount > 0 ? counter.innerHTML = favoriteCount : counter.innerHTML = '';
    })
})

let compareCount = 0;
compareBtn.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        const counter = document.querySelector('.comparison .counter');
        if (elem.getAttribute('data-state') === '1') {
            elem.setAttribute('data-state', '0')
            elem.children[1].innerHTML = 'Сравнить товар';
            compareCount--;
        } else {
            elem.setAttribute('data-state', '1')
            elem.children[1].innerHTML = 'В сравнении';
            compareCount++;
        } 
        compareCount > 0 ? counter.innerHTML = compareCount : counter.innerHTML = '';
    })
})

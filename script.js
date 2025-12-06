const searchData=document.querySelector('.search__input');
const searchSystem=document.querySelector('.search__select');
const searchButton=document.querySelector('.search__button');

searchButton.addEventListener('click', search);

function search(event) {
    event.preventDefault();
    let value = searchData.value;
    let searchEngine = searchSystem.value;

    let params;

    if (searchEngine === 'bing' || searchEngine === 'google') {
        params = 'search?q=';
    }
    else if (searchEngine === 'yandex') {
        params = 'search?teaxt=';
    }
    else if (searchEngine === 'duckduckgo') {
        params = '?q=';
    }
    window. location.href = `https://www.${searchEngine}.com/${params}` + value
}


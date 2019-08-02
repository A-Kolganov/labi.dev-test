import templ from '../../templates/list-template.hbs';


function displayItems(e){
    const appendMain = document.querySelector('.search-list__list');

    fetch('http://my-json-server.typicode.com/A-Kolganov/labi.dev-test/db')
    .then(response =>{
        if(response.ok) return response.json();
        throw new Error(`Error while fetching: ${response.statusText}`);
    }).then( data =>{
        console.log(data.posts)
        data.posts.forEach( item => appendMain.insertAdjacentHTML("afterbegin", templ(item)))
    }).catch(err=> console.log(err))
}

export {displayItems};
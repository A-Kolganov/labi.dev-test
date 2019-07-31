import templ from '../../templates/list-template.hbs';
import DB from '../db/db.json';
import DBJSON from '../db/wemrq-97qfu.json'

function displayItems(e){
    
    const appendMain = document.querySelector('.search-list');
    console.log(DBJSON);
    
    
    // fetch('https://s5.aconvert.com/convert/p3r68-cdx67/wemrq-97qfu.json')
    // .then(response =>{
    //     if(response.ok) return response.json();
    //     throw new Error(`Error while fetching: ${response.statusText}`);
    // }).then( data =>{
    //     console.log(data);
    // })
    

    // content.insertAdjacentHTML("beforeend", templ(founder));
}

export {displayItems};
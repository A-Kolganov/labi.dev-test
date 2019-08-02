import templ from '../../templates/list-template.hbs';


function displayItems(e){
    const appendMain = document.querySelector('.search-list__list');
    

    fetch('http://my-json-server.typicode.com/A-Kolganov/labi.dev-test/db')
    .then(response =>{
        if(response.ok) return response.json();
        throw new Error(`Error while fetching: ${response.statusText}`);
    }).then( data =>{
        
        data.posts.forEach( item=>{
            console.log(item.client.rating);
            
            appendMain.insertAdjacentHTML("afterbegin", templ(item))
            const rating = document.querySelector('.gold')
            rating.setAttribute("style", "width:"+Number(item.client.rating)*20+'%' )
             
            console.log()
        })

    }).catch(err=> console.log(err))
}

export {displayItems};

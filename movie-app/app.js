const form=document.querySelector('form');
const list=document.getElementById('list');

function getMovie(search){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    const url=`https://api.tvmaze.com/search/shows?q=${search}`
    axios.get(url)
    .then((res)=>{
        for(let item of res.data){
            if(item.show.image){
                const image=document.createElement('img');
                image.src=item.show.image.medium;
                image.style.margin='10px';
                list.append(image);
           
            }
            
        }
    })
    .catch((res)=>{
        console.log(err)
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
const inpText=form.elements[0].value;
getMovie(inpText);
form.elements[0].value="";
})
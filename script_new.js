console.log("working"); 
//import the API links for info,image and seacrch 
//get request api 
//access the javascript 
const form=document.getElementById("form");
const searchTerm=document.getElementById("search");
const  content=document.getElementById("content");  
let ans={};
  /*************list of api links*************** */
const api_req="https://api.themoviedb.org/3/discover/movie/?api_key=04c35731a5ee918f014970082a0088b1";
const api_key="03e82744afb44f4466d2dcc22a483f9e"; 
const img="https://image.tmdb.org/t/p/w1280"; 
const search="https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1&include_adult=true&query=" 
const main=document.getElementsByTagName('main');
/***************fetch api in action******* */ 
//default dummy api
get_api(api_req); 

//define the fetch api function 
function get_api(url){
    try{
         fetch(url)
         .then(response=>response.json())
         .then(data=>console.log(showMovies(data.results)));
         
        }
         catch(error){
           console.log("The error is"+error); 
         }  
         
         
}  

function showMovies(movies){ 
  main[0].innerHTML="";
    console.log(movies);
    movies.forEach(movie => { 
        //accessing the req info 
        //const {img_link}=poster_path; 
        /*const summary=overview;  
      
        const rating=vote_average; 
        const title=title; 
        console.log(img_link);*/ 
        console.log(main); 
        const {poster_path,vote_average,title,overview}=movie;  //the  properties of movie object would be saved as the same name \
        console.log(poster_path,vote_average,title,overview); 
       
       
        console.log(main[0]);
        const addMovie=document.createElement("div"); 
            addMovie.classList.add('movie'); 
            addMovie.innerHTML=`<img src="${img+poster_path}" alt="photo of a random movie"/> 
            <div class="movie-info"><h3>${title}</h3><h4>${vote_average}</h4></div>
            <div class='overview'<h3>Overview: ${overview}</div>`
            
main[0].appendChild(addMovie);

        
    });



} 


//function to detect the inner html in search abr and modifyt the req url accordingly 

    form.addEventListener('submit',(e)=>{ 
        e.preventDefault();
        const result=searchTerm.value;
        console.log(searchTerm.value); 
         const movie_name=search+result; 
        console.log(movie_name); 
        get_api(movie_name);
        
    }) 


    
 









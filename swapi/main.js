const axios = require('axios');

let resBtn = document.querySelector('button');
const clickBtn = () => axios.get('https://swapi.dev/api/planets/?search=Alderaan')
.then(response =>{
        console.log(response.data);});

resBtn.addEventListener("click", clickBtn);


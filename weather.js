const city=document.querySelector('h1')
const temp=document.querySelector('h2')
const description=document.querySelector('.description')

const input=document.querySelector('#city-data')
const search=document.querySelector('button')
const img=document.querySelector('img')

search.addEventListener('click',async()=>{

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=fe824cb856a37281c8c13e7a5fbbd488&units=metric`

    try{
        const res=await axios.get(url)
        console.log('res', res)
        const src='https://openweathermap.org/img/wn/03d@2x.png'



city.textContent=res.data.name
temp.textContent=`${res.data.main.temp}"c`

description.textContent=res.data.weather[0].description

//img.setAttribute('src','https://openweathermap.org/img/wn/03d@2x.png');


    }catch (Error){
        console.log('err', err)
    }
    
})
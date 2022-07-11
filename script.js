
const button = document.querySelector('button');
const search = document.getElementById('search');
const detail = document.getElementById('userID');
const body = document.querySelector('body');


const getDetail = async (city) => {
    // 2. adding the cityname value dynamically to the API
    const url = 'https://jsonplaceholder.typicode.com/users';
    // 3. calling the API
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    Detail(data);
  };

  const Detail=(data)=> {
    console.log('inside content'+data)
    if(data.cod>='404'){
        detail.innerHTML=`<h2> Detail not Found`;
        return;
    }
    detail.innerHTML=`
    <div>
    <h2>Geekster</h2>
    <h3>geek@gmail.com</h3>
    <h3>Mumbai</h3>
    <p>www.geekster.com</p>
</div>
    `

  }

  body.onclick=()=>{
    Detail.innerHTML=
  SVGTextContentElement
  };

  


   
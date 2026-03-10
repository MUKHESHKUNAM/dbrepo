console.log("first");
let box = document.getElementById("box");

// let imagesarr = [];
const dbapi = async () => {
  const character = await fetch("https://dragonball-api.com/api/characters")
  const res = await character.json();
   dbimages=res.items;
  return dbimages;

}

const dbcharimages= async()=>{
  const dbcharacter= await dbapi();

   dbcharacter.map((eachobject) => { 
    //card
    const card = document.createElement("div");
    card.classList.add("cardstyle");
    //image
    const imgEle = document.createElement("img");
    imgEle.src = eachobject.image;
    imgEle.classList.add("imagestyle");
    //name
    const Name = document.createElement("h1");
    Name.textContent = eachobject.name;
    //ki
    const power=document.createElement("h2")
    power.textContent=eachobject.ki;

    box.appendChild(card);
    card.appendChild(imgEle);
    card.appendChild(Name);
    card.appendChild(power);
  });

}
dbcharimages();

//   imagesarr = res.items;
//   console.log(imagesarr);
//   imagesarr.map((eachobject) => {
//     //card
//     const card = document.createElement("div");
//     card.classList.add("cardstyle");1
//     //image
//     const imgEle = document.createElement("img");
//     imgEle.src = eachobject.image;
//     imgEle.classList.add("imagestyle");
//     //name
//     const Name = document.createElement("h1");
//     Name.textContent = eachobject.name;
//     //ki
//     const power=document.createElement("h2")
//     power.textContent=eachobject.ki;

//     box.appendChild(card);
//     card.appendChild(imgEle);
//     card.appendChild(Name);
//     card.appendChild(power);
//   });
// };
// info();
// 
  //  fetch("https://dragonball-api.com/api/characters")
  // .then((respond) => responds.json())
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((error) => {
  //   console.log("the error is : " + error);
  // });


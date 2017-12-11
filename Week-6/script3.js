let cars = [
   {
      brand: 'Toyota',
      model: 'Camry',
      'year': 1999,
      'price': 20000,
      image_url: "https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"
   },
   {
      brand: 'BMW',
      model: 'X6',
      year: 2014,
      price: 25000,
      image_url: "https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"
   },
   {
      brand: 'Daewoo',
      model: 'Nexia',
      year: 2007,
      price: 15000,
      image_url: "https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"
   }
];
for (var i = 0; i < cars.length; i++)
  {
     var div = document.createElement('div');
     div.setAttribute("class", "card");
     styleDiv = div.style;
     styleDiv.position = "relative";
     styleDiv.width = "180px"
     var image = document.createElement('img');
     image.src = cars[i]["image_url"];
     style = image.style;
     style.left = i * 60 + "px";
     style.height = "" + (i * 20 + 100) + "px";
     style.width = "180px";
     image.setAttribute("data-credits", String(cars[i]["price"]));

     var image1 = document.createElement('img');
     image1.src = "dollar.png";
     image1.setAttribute("class", "dollar");

     style1 = image1.style;
     style1.height = "30px";
     style1.width = "30px";
     style1.position = "absolute";
     style1.right = "2px";
     style1.top = "2px";

     div.appendChild(image);
     div.appendChild(image1);
     document.getElementById("cars").appendChild(div);
  }

function dollar(event)
  {
     const image3 = event.currentTarget;
     var sum = document.getElementById("sum");
     var items = document.getElementById("items");
     var its = parseInt(items.innerText);
     var s = parseInt(document.getElementById("sum").innerText);
     if (image3.getAttribute('src') === 'dollar.png')
       {
          image3.src = "inbasket.png";
          s = s + parseInt(image.getAttribute("data-credits"));
          its++;
       }
     else
       {
          image3.src = "dollar.png";
          s = s - parseInt(image.getAttribute("data-credits"));
          its--;
       }
     sum.innerHTML = s + "";
     items.innerHTML = its + "";
  }

const image2 = document.getElementsByClassName("dollar");
for (var i = 0; i < image2.length; i += 1)
  {
     image2[i].addEventListener('click', dollar);
  }

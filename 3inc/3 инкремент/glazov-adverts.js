ymaps.ready(init);

   function init() {
     var map1 = new ymaps.Map("map", {
        center: [58.1409, 52.6743],
        zoom: 14       
          }, {
             balloonMaxWidth: 600
   });
                    
  var placemark1 = new ymaps.Placemark(
                                 [58.136207, 52.660731],
                                 {
   balloonContentHeader: '<a href = "#">РК 1</a><br>' +
   '<p align="justify">Адрес: ул. Пряженникова, в р-не д. 4 по ул. Динамо. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос. собственность до разграничения.</p>',
   balloonContentBody: '<a href="https://ibb.co/3C4D3d0"><img src="https://i.ibb.co/hmLP69K/1.jpg" height="250" width="400"></a>',
   hintContent: 'РК 1',
   iconContent: '1',
   
   }, {
   preset:"islands#redIcon",   
   }
  );
     
  var placemark2 = new ymaps.Placemark(
                                 [58.140544, 52.678451],
                                 {
   balloonContentHeader: '<a href = "#">РК 2</a><br>' +
   '<p align="justify">Адрес: ул.Толстого, в р-не д.2 по ул.Первомайская. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000046:0050.</p>',
   balloonContentBody: '<a href="https://ibb.co/yWkjKsx"><img src="https://i.ibb.co/dGpYXKH/2.jpg" height="250" width="400"></a>',
   hintContent: 'РК 2',
   iconContent: '2',   
    }, { 
    preset:"islands#redIcon",
    }
  );
  
  var placemark3 = new ymaps.Placemark(
                      [58.139497, 52.684749],
                      {
  balloonContentHeader: '<a href = "#">РК 3</a><br>' +
  '<p align="justify">Адрес: ул.Карла Маркса, напротив д.11/37 по ул.Карла Маркса. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000033:0009.</p>',
  balloonContentBody: '<a href="https://ibb.co/w7dgpVt"><img src="https://i.ibb.co/f9XFrfJ/3.jpg" height="250" width="400"></a>',
  hintContent: 'РК 3',
  iconContent: '3',
    }, { 
    preset: "islands#redIcon"
    }
  );
  
  var placemark4 = new ymaps.Placemark(
                      [58.120866, 52.654311],
                      {
  balloonContentHeader: '<a href = "#">РК 4</a><br>' +
  '<p align="justify">Адрес: ул.Циолковского (в р-не Окружного шоссе). Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000091:0039.</p>',
  balloonContentBody: '<a href="https://ibb.co/8BFBzZ2"><img src="https://i.ibb.co/H2m2N8Y/4.jpg" height="250" width="400"></a>',
  hintContent: 'РК 4',
  iconContent: '4',
    }, {
    preset: "islands#redIcon"
    }
  );
                    
  var placemark5 = new ymaps.Placemark(
                      [58.136244, 52.662860],
                      {
  balloonContentHeader: '<a href = "#">РК 5</a><br>' +
  '<p align="justify">Адрес: напротив д.1 по ул.Пряженникова. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. </p>',
  balloonContentBody: '',
  hintContent: 'РК 5',  
  iconContent: '5',
    }, {
    preset: "islands#redIcon"
    }
  );
 
  var placemark6 = new ymaps.Placemark(
                      [58.137488, 52.687355],
                      {
  balloonContentHeader: '<a href = "#">РК 6</a><br>' +
  '<p align="justify">Адрес: в р-не д.38а по ул.Толстого. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/TqcVCrg"><img src="https://i.ibb.co/x8hp437/6.jpg" height="250" width="400"></a>',
  hintContent: 'РК 6',
  iconContent: '6',
    }, {
    preset: "islands#yellowIcon"
    }
  );
 

  var placemark7 = new ymaps.Placemark(
                      [58.137568, 52.687119],
                      {
  balloonContentHeader: '<a href = "#">РК 7</a><br>' +
  '<p align="justify">Адрес: в р-не д.46 по ул.Кирова. Вид РК: сити-формат. Тип РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения. </p>',
  balloonContentBody: '<a href="https://ibb.co/8BwC6mt"><img src="https://i.ibb.co/VNG12L5/7.jpg" height="250" width="400"></a>',
  hintContent: 'РК 7',
  iconContent: '7',
    }, {
    preset: "islands#yellowIcon"
    }
  );
  
  var placemark8 = new ymaps.Placemark(
                      [58.141556, 52.645184],
                      {
  balloonContentHeader: '<a href = "#">РК 8</a><br>' +
  '<p align="justify">Адрес: в р-не д.46 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/WcGMzSH"><img src="https://i.ibb.co/D7zvM31/8.jpg" height="250" width="400"></a>',
  hintContent: 'РК 8',
  iconContent: '8',
    }, {
    preset: "islands#yellowIcon"
    }
  );
  
  var placemark9 = new ymaps.Placemark(
                      [58.142618, 52.640273],
                      {
  balloonContentHeader: '<a href = "#">РК 9</a><br>' +
  '<p align="justify">Адрес: в р-не д.52 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/DWRqZPn"><img src="https://i.ibb.co/4tVQHwx/9-10.jpg" height="250" width="400"></a>',
  hintContent: 'РК 9',
  iconContent: '9',
    }, {
    preset: "islands#yellowIcon"
    }
  );
  
  var placemark10 = new ymaps.Placemark(
                      [58.142618, 52.640273], 
                      {
  balloonContentHeader: '<a href = "#">РК 10</a><br>' +
  '<p align="justify">Адрес: в р-не д.52 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/DWRqZPn"><img src="https://i.ibb.co/4tVQHwx/9-10.jpg" height="250" width="400"></a>',
  hintContent: 'РК 10',
  iconContent: '10',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark11 = new ymaps.Placemark(
                      [58.141658, 52.644699],
                      {
  balloonContentHeader: '<a href = "#">РК 11</a><br>' +
  '<p align="justify">Адрес: в р-не д.46 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/hDw4TQY"><img src="https://i.ibb.co/18jP4yz/11.jpg" height="250" width="400"></a>',
  hintContent: 'РК 11',
  iconContent: '11',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark12 = new ymaps.Placemark(
                      [58.141915, 52.643553],
                      {
  balloonContentHeader: '<a href = "#">РК 12</a><br>' +
  '<p align="justify">Адрес: в р-не д.46 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/2qdTmk1"><img src="https://i.ibb.co/5TLPtRg/12.jpg" height="250" width="400"></a>',
  hintContent: 'РК 12',
  iconContent: '12',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark13 = new ymaps.Placemark(
                      [58.141754, 52.644474],
                      {
  balloonContentHeader: '<a href = "#">РК 13</a><br>' +
  '<p align="justify">Адрес: в р-не д.46 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '',
  hintContent: 'РК 13',
  iconContent: '13',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark14 = new ymaps.Placemark(
                      [58.142491, 52.640815],
                      {
  balloonContentHeader: '<a href = "#">РК 14</a><br>' +
  '<p align="justify">Адрес: в р-не д.54 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '',
  hintContent: 'РК 14',
  iconContent: '14',
    }, {
    preset: "islands#yellowIcon"
    }
  );
 
  var placemark15 = new ymaps.Placemark(
                      [58.142553, 52.640483],
                      {
  balloonContentHeader: '<a href = "#">РК 15</a><br>' +
  '<p align="justify">Адрес: в р-не д.54 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '',
  hintContent: 'РК 15',
  iconContent: '15',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark16 = new ymaps.Placemark(
                      [58.147356, 52.650495],
                      {
  balloonContentHeader: '<a href = "#">РК 16</a><br>' +
  '<p align="justify">Адрес: в р-не д.3 по ул.Советская. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/wsbnv13"><img src="https://i.ibb.co/FVfQPtN/16.jpg" height="250" width="400"></a>',
  hintContent: 'РК 16',
  iconContent: '16',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark17 = new ymaps.Placemark(
                      [58.147625, 52.650706],
                      {
  balloonContentHeader: '<a href = "#">РК 17</a><br>' +
  '<p align="justify">Адрес: в р-не д.1 по ул.Советская. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с ддвумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/yWbv7MM"><img src="https://i.ibb.co/6gf9Lpp/17.jpg" height="250" width="400"></a>',
  hintContent: 'РК 17',
  iconContent: '17',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark18 = new ymaps.Placemark(
                      [58.147502, 52.650609],
                      {
  balloonContentHeader: '<a href = "#">РК 18</a><br>' +
  '<p align="justify">Адрес: в р-не д.3 по ул.Советская. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационнями полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/Yk5WzQX"><img src="https://i.ibb.co/0M0Xg2K/18.jpg" height="250" width="400"></a>',
  hintContent: 'РК 18',
  iconContent: '18',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark19 = new ymaps.Placemark(
                      [58.145631, 52.650469],
                      {
  balloonContentHeader: '<a href = "#">РК 19</a><br>' +
  '<p align="justify">Адрес: в р-не д.19 по ул.Дзержинского. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с двумя информационными полями. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/TkqQyvP"><img src="https://i.ibb.co/t4P0RmY/19.jpg" height="250" width="400"></a>',
  hintContent: 'РК 19',
  iconContent: '19',
    }, {
    preset: "islands#redIcon"
    }
  );

  var placemark20 = new ymaps.Placemark(
                      [58.145571, 52.650753],
                      {
  balloonContentHeader: '<a href = "#">РК 20</a><br>' +
  '<p align="justify">Адрес: в р-не д.19 по ул.Дзержинского. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с двумя информационными полями. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/bvM2JCM"><img src="https://i.ibb.co/09RFt6R/20.jpg" height="250" width="400"></a>',
  hintContent: 'РК 20',
  iconContent: '20',
    }, {
    preset: "islands#redIcon"
    }
  );

  var placemark21 = new ymaps.Placemark(
                      [58.122092, 52.655410],
                      {
  balloonContentHeader: '<a href = "#">РК 21</a><br>' +
  '<p align="justify">Адрес: ул.Циолковского, в р-не Окружного шоссе. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/FXYBbtY"><img src="https://i.ibb.co/gdWDMCW/21.jpg" height="250" width="400"></a>',
  hintContent: 'РК 21',
  iconContent: '21',
    }, {
    preset: "islands#redIcon"
    }
  );

  var placemark22 = new ymaps.Placemark(
                      [58.137855, 52.687839],
                      {
  balloonContentHeader: '<a href = "#">РК 22</a><br>' +
  '<p align="justify">Адрес: в р-не д.41 по ул.Толстого. Вид РК: пиллар. Тип РК: отдельно стоящая, имеющая форму треугольной призмы малого формата с внутренним подсветом. Собственник: гос.собсвенность др разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/N6YfxrH"><img src="https://i.ibb.co/DDKm4YS/22.jpg" height="250" width="400"></a>',
  hintContent: 'РК 22',
  iconContent: '22',
    }, {
    preset: "islands#darkBlueIcon"
    }
  );

  var placemark23 = new ymaps.Placemark(
                      [58.138478, 52.684456],
                      {
  balloonContentHeader: '<a href = "#">РК 23</a><br>' +
  '<p align="justify">Адрес: в р-не д.38 по ул.Тостого. Вид РК: пиллар. Тип РК: отдельно стоящая, имеющая форму треугольной призмы малого формата с внутренним подсветом. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/fHDWPFZ"><img src="https://i.ibb.co/cQY973R/23.jpg" height="250" width="400"></a>',
  hintContent: 'РК 23',
  iconContent: '23',
    }, {
    preset: "islands#darkBlueIcon"
    }
  );

  var placemark24 = new ymaps.Placemark(
                      [58.135861, 52.663460],
                      {
  balloonContentHeader: '<a href = "#">РК 24</a><br>' +
  '<p align="justify">Адрес: северная кольцевая развязка. Вид РК: билборд. Тип РК: отдельно стоящая трёхсторонняя щитовая среднего размера. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/9bD0sHx"><img src="https://i.ibb.co/R3FKzTX/24.jpg" height="250" width="400"></a>',
  hintContent: 'РК 24',
  iconContent: '24',
    }, {
    preset: "islands#redIcon"
    }
  );

  var placemark25 = new ymaps.Placemark(
                      [58.137797, 52.644045],
                      {
  balloonContentHeader: '<a href = "#">РК 25</a><br>' +
  '<p align="justify">Адрес: ул.Пряженникова, д.8. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/df7d2h8"><img src="https://i.ibb.co/8mXW5h1/25.jpg" height="250" width="400"></a>',
  hintContent: 'РК 25',
  iconContent: '25',
    }, {
    preset: "islands#redIcon"
    }
  );

  var placemark26 = new ymaps.Placemark(
                      [58.141379, 52.675183],
                      {
  balloonContentHeader: '<a href = "#">РК 26</a><br>' +
  '<p align="justify">Адрес: в р-не моста на пл.Свободы. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с двумя информационными полями. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000046:0042.</p>',
  balloonContentBody: '<a href="https://ibb.co/gR49V6X"><img src="https://i.ibb.co/87YscXR/26.jpg" height="250" width="400"></a>',
  hintContent: 'РК 26',
  iconContent: '26',
    }, {
    preset: "islands#yellowIcon"
    }
  );

  var placemark27 = new ymaps.Placemark(
                      [58.141494, 52.673981],
                      {
  balloonContentHeader: '<a href = "#">РК 27</a><br>' +
  '<p align="justify">Адрес: в р-не моста на пл.Свободы. Вид РК: светодиодный экран. Тип РК: кластерный. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000032:0046.</p>',
  balloonContentBody: '<a href="https://ibb.co/Tg69wTj"><img src="https://i.ibb.co/6WzjyZ9/27.jpg" height="250" width="400"></a>',
  hintContent: 'РК 27',
  iconContent: '27',
    }, {
    preset: "islands#lightBlueIcon"
    }
  );

  var placemark28 = new ymaps.Placemark(
                      [58.140901, 52.677840],
                      {
  balloonContentHeader: '<a href = "#">РК 28</a><br>' +
  '<p align="justify">Адрес: ул.Толстого, в р-не д.2 по ул.Первомайская. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/mtM8Y9x"><img src="https://i.ibb.co/VDPmhgK/28.jpg" height="250" width="400"></a>',
  hintContent: 'РК 28',
  iconContent: '28',
    }, {
    preset: "islands#redIcon"
    }
  );

  var placemark29 = new ymaps.Placemark(
                      [58.144683, 52.666159],
                      {
  balloonContentHeader: '<a href = "#">РК 29</a><br>' +
  '<p align="justify">Адрес: пересечение ул.Короленко и ул.Чепецкая. Вид РК: билборд. Тип РК: отдельно стоящая трёхсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/KDxJXtR"><img src="https://i.ibb.co/sC9Z2Tk/29.jpg" height="250" width="400"></a>',
  hintContent: 'РК 29',
  iconContent: '29',
    }, {
    preset: "islands#redIcon"
    }
  );

  var placemark30 = new ymaps.Placemark(
                      [58.140186, 52.685513],
                      {
  balloonContentHeader: '<a href = "#">РК 30</a><br>' +
  '<p align="justify">Адрес: в р-не д.11/37 по ул.Карла Маркса. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/PrQXs4c"><img src="https://i.ibb.co/D1pcPk9/30.jpg" height="250" width="400"></a>',
  hintContent: 'РК 30',
  iconContent: '30',
    }, {
    preset: "islands#redIcon"
    }
  );

  var placemark31 = new ymaps.Placemark(
                       [58.142029, 52.671137],
                       {
  balloonContentHeader: '<a href = "#">РК 31</a><br>' + 
  '<p align="justify">Адрес: напротив д.3 по ул.Чепецкая. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000032:0041.</p>',
  hintContent: 'РК 31',
  iconContent: '31',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark32 = new ymaps.Placemark(
                       [58.130521, 52.659577],
                       {
  balloonContentHeader: '<a href = "#">РК 32</a><br>' + 
  '<p align="justify">Адрес: Южная кольцевая развязка. Вид РК: билборд. Тип РК: отдельно стоящая трёхсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/bJGjFt9"><img src="https://i.ibb.co/X8GfDHR/32.jpg" height="250" width="400"></a>',
  hintContent: 'РК 32',
  iconContent: '32',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark33 = new ymaps.Placemark(
                       [58.143362, 52.668240],
                       {
  balloonContentHeader: '<a href = "#">РК 33</a><br>' + 
  '<p align="justify">Адрес: напротив д.9 по ул.Чепецкая. Вид РК: билборд. Тип РК: отдельно стоящая трёхсторонняя щитовая среднего размера. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000032:0043.</p>',
  hintContent: 'РК 33',
  iconContent: '33',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark34 = new ymaps.Placemark(
                       [58.141049, 52.674983],
                       {
  balloonContentHeader: '<a href = "#">РК 34</a><br>' + 
  '<p align="justify">Адрес: площадь Свободы. Вид РК: пиллар. Тип РК: отдельно стоящая, имеющая форму треугольной призмы малого формата с внутренним подсветом. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 34',
  iconContent: '34',
    }, {
    preset: "islands#darkBlueIcon",
    }
  );

  var placemark35 = new ymaps.Placemark(
                       [58.141415, 52.646111],
                       {
  balloonContentHeader: '<a href = "#">РК 35</a><br>' + 
  '<p align="justify">Адрес: пересечение ул.Кирова и ул.Советской. Вид РК: пиллар. Тип РК: отдельно стоящая, имеющая форму треугольной призмы малого формата с внутренним подсветом. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 35',
  iconContent: '35',
    }, {
    preset: "islands#darkBlueIcon",
    }
  );

  var placemark36 = new ymaps.Placemark(
                       [58.132060, 52.689214],
                       {
  balloonContentHeader: '<a href = "#">РК 36</a><br>' + 
  '<p align="justify">Адрес: пересечение ул.Пехтина и ул.Сибирской. Вид РК: билборд. Тип РК: отдельно стоящая трёхсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/QfH4bn4"><img src="https://i.ibb.co/xDgNCGN/36.jpg" height="250", width="400"></a>',
  hintContent: 'РК 36',
  iconContent: '36',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark37 = new ymaps.Placemark(
                       [58.141282, 52.676082],
                       {
  balloonContentHeader: '<a href = "#">РК 37</a><br>' + 
  '<p align="justify">Адрес: площадь Свободы. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с двумя информационными полями. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/P6NQ8Lr"><img src="https://i.ibb.co/x7DHQk2/37.jpg" height="250" width="400"></a>',
  hintContent: 'РК 37',
  iconContent: '37',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark38 = new ymaps.Placemark(
                       [58.132859, 52.674781],
                       {
  balloonContentHeader: '<a href = "#">РК 38</a><br>' + 
  '<p align="justify">Адрес: в р-не д.55 по ул.Сулимова. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственость до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/Wy8KR7H"><img src="https://i.ibb.co/wWG628d/38.jpg" height="250" width="400"></a>',
  hintContent: 'РК 38',
  iconContent: '38',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark39 = new ymaps.Placemark(
                       [58.137246, 52.689517],
                       {
  balloonContentHeader: '<a href = "#">РК 39</a><br>' + 
  '<p align="justify">Адрес: в р-не д.43а по ул.Толстого. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/tDDBqCj"><img src="https://i.ibb.co/SBBNtvY/39.jpg" height="250" width="400"></a>',
  hintContent: 'РК 39',
  iconContent: '39',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark40 = new ymaps.Placemark(
                       [58.123145, 52.656045],
                       {
  balloonContentHeader: '<a href = "#">РК 40</a><br>' + 
  '<p align="justify">Адрес: в р-не д.23 по ул.Циолковского. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственик: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/fS6PQtm"><img src="https://i.ibb.co/59pf2vq/40.jpg" height="250" width="400"></a>',
  hintContent: 'РК 40',
  iconContent: '40',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark41 = new ymaps.Placemark(
                       [58.142618, 52.669833],
                       {
  balloonContentHeader: '<a href = "#">РК 41</a><br>' + 
  '<p align="justify">Адрес: в р-не д.5 по ул.Чепецкой. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 41',
  iconContent: '41',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark42 = new ymaps.Placemark(
                       [58.120276, 52.653700],
                       {
  balloonContentHeader: '<a href = "#">РК 42</a><br>' + 
  '<p align="justify">Адрес: ул.Циолковского, в р-не Окружного шоссе. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/GTCpy9z"><img src="https://i.ibb.co/6BDwz8j/42.jpg" height="250" width="400"></a>',
  hintContent: 'РК 42',
  iconContent: '42',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark43 = new ymaps.Placemark(
                       [58.127550, 52.698565],
                       {
  balloonContentHeader: '<a href = "#">РК 43</a><br>' + 
  '<p align="justify">Адрес: напротив д.89а по ул.Сибирская. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/7tmZhR5"><img src="https://i.ibb.co/3mZjKMq/43.jpg" height="250" width="400"></a>',
  hintContent: 'РК 43',
  iconContent: '43',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark44 = new ymaps.Placemark(
                       [58.127091, 52.701201],
                       {
  balloonContentHeader: '<a href = "#">РК 44</a><br>' + 
  '<p align="justify">Адрес: напротив д.99 по ул.Сибирская. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/NZrfRGp"><img src="https://i.ibb.co/Wg07CRF/44.jpg" height="250" width="400"></a>',
  hintContent: 'РК 44',
  iconContent: '44',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark45 = new ymaps.Placemark(
                       [58.135304, 52.663298],
                       {
  balloonContentHeader: '<a href = "#">РК 45</a><br>' + 
  '<p align="justify">Адрес: в р-не д.88 по ул.Сулимова. Вид РК: билборд. Тип РК: отдельно стоящая трёхсторонняя щитовая среднего размера. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000055:0085.</p>',
  balloonContentBody: '<a href="https://ibb.co/M88VY5W"><img src="https://i.ibb.co/4ssT6g9/45.jpg" height="250" width="400"></a>',
  hintContent: 'РК 45',
  iconContent: '45',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark46 = new ymaps.Placemark(
                       [58.133299, 52.681369],
                       {
  balloonContentHeader: '<a href = "#">РК 46</a><br>' + 
  '<p align="justify">Адрес: пересечение ул.Сибирская, ул.Будённого, ул.Сулимова. Вид РК: билборд. Тип РК: отдельно стоящая трёхсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/vwvpY8T"><img src="https://i.ibb.co/cgX0LdZ/46.jpg" height="250" width="400"></a>',
  hintContent: 'РК 46',
  iconContent: '46',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark47 = new ymaps.Placemark(
                       [58.139990, 52.644276],
                       {
  balloonContentHeader: '<a href = "#">РК 47</a><br>' + 
  '<p align="justify">Адрес: в р-не д.34 по ул.Советская. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/BNmfYxy"><img src="https://i.ibb.co/JQNcS4v/47.jpg" height="250" width="400"></a>',
  hintContent: 'РК 47',
  iconContent: '47',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark48 = new ymaps.Placemark(
                       [58.138876, 52.677746],
                       {
  balloonContentHeader: '<a href = "#">РК 48</a><br>' + 
  '<p align="justify">Адрес: в р-не д.1 по ул.Первомайская. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/YjVYgDX"><img src="https://i.ibb.co/GPrBms9/48.jpg" height="250" width="400"></a>',
  hintContent: 'РК 48',
  iconContent: '48',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark49 = new ymaps.Placemark(
                       [58.139008, 52.678183],
                       {
  balloonContentHeader: '<a href = "#">РК 49</a><br>' + 
  '<p align="justify">Адрес: в р-не д.1 по ул.Первомайская. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/vQRJTKX"><img src="https://i.ibb.co/yY78Zb4/49.jpg" height="250" width="400"></a>',
  hintContent: 'РК 49',
  iconContent: '49',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark50 = new ymaps.Placemark(
                       [58.140204, 52.644440],
                       {
  balloonContentHeader: '<a href = "#">РК 50</a><br>' + 
  '<p align="justify">Адрес: в р-не д.34 по ул.Советская. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/G7QT2Mg"><img src="https://i.ibb.co/Mnk6V1q/50.jpg" height="250" width="400"></a>',
  hintContent: 'РК 50',
  iconContent: '50',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark51 = new ymaps.Placemark(
                       [58.140918, 52.694058],
                       {
  balloonContentHeader: '<a href = "#">РК 51</a><br>' + 
  '<p align="justify">Адрес: в р-не д.10 по ул.Калинина. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/87XF5VV"><img src="https://i.ibb.co/fxQmp77/51.jpg" height="250" width="400"></a>',
  hintContent: 'РК 51',
  iconContent: '51',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark52 = new ymaps.Placemark(
                       [58.140103, 52.660768],
                       {
  balloonContentHeader: '<a href = "#">РК 52</a><br>' + 
  '<p align="justify">Адрес: в р-не д.24 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя инфомационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/rcMpQt7"><img src="https://i.ibb.co/yY5kNRf/52.jpg" height="250" width="400"></a>',
  hintContent: 'РК 52',
  iconContent: '52',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark53 = new ymaps.Placemark(
                       [58.140103, 52.660417],
                       {
  balloonContentHeader: '<a href = "#">РК 53</a><br>' + 
  '<p align="justify">Адрес: в р-не д.24 по ул.Кирова. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя иформационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/NZsGVFS"><img src="https://i.ibb.co/HnV9FKd/53.jpg" height="250" width="400"></a>',
  hintContent: 'РК 53',
  iconContent: '53',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark54 = new ymaps.Placemark(
                       [58.140805, 52.694009],
                       {
  balloonContentHeader: '<a href = "#">РК 54</a><br>' + 
  '<p align="justify">Адрес: в р-не д.10 по ул.Калинина. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/3T52Hys"><img src="https://i.ibb.co/JcWVPRd/54.jpg" height="250" width="400"></a>',
  hintContent: 'РК 54',
  iconContent: '54',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark55 = new ymaps.Placemark(
                       [58.136266, 52.655508],
                       {
  balloonContentHeader: '<a href = "#">РК 55</a><br>' + 
  '<p align="justify">Адрес: на территории платной стоянки в р-не д.63 по ул.Пряженникова. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/6rK8LXQ"><img src="https://i.ibb.co/XjnDMYH/55.jpg" height="250" width="400"></a>',
  hintContent: 'РК 55',
  iconContent: '55',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark56 = new ymaps.Placemark(
                       [58.130326, 52.658728],
                       {
  balloonContentHeader: '<a href = "#">РК 56</a><br>' + 
  '<p align="justify">Адрес: ул.Циолковского, в р-не Окружного шоссе. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 56',
  iconContent: '56',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark57 = new ymaps.Placemark(
                       [58.127831, 52.697885],
                       {
  balloonContentHeader: '<a href = "#">РК 57</a><br>' + 
  '<p align="justify">Адрес: напротив д.89 по ул.Сибирская. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/XWLs3Tm"><img src="https://i.ibb.co/5148nVq/57.jpg" height="250" width="400"></a>',
  hintContent: 'РК 57',
  iconContent: '57',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark58 = new ymaps.Placemark(
                       [58.143065, 52.668894],
                       {
  balloonContentHeader: '<a href = "#">РК 58</a><br>' + 
  '<p align="justify">Адрес: напротив д.7 по ул.Чепецкая. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 58',
  iconContent: '58',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark59 = new ymaps.Placemark(
                       [58.129243, 52.667199],
                       {
  balloonContentHeader: '<a href = "#">РК 59</a><br>' + 
  '<p align="justify">Адрес: в р-не д.2 по ул.Драгунова. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 59',
  iconContent: '59',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark60 = new ymaps.Placemark(
                       [58.150604, 52.704375],
                       {
  balloonContentHeader: '<a href = "#">РК 60</a><br>' + 
  '<p align="justify">Адрес: ул.Пригородная (в р-не старого водозабора).Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 60',
  iconContent: '60',
    }, {
    preset: "islands#redIcon",
    }
  );

  map1.geoObjects.add(placemark1);
  map1.geoObjects.add(placemark2);
  map1.geoObjects.add(placemark3);
  map1.geoObjects.add(placemark4);
  map1.geoObjects.add(placemark5);
  map1.geoObjects.add(placemark6);
  map1.geoObjects.add(placemark7);
  map1.geoObjects.add(placemark8);
  map1.geoObjects.add(placemark9);
  map1.geoObjects.add(placemark10);
  map1.geoObjects.add(placemark11);
  map1.geoObjects.add(placemark12);
  map1.geoObjects.add(placemark13);
  map1.geoObjects.add(placemark14);
  map1.geoObjects.add(placemark15);
  map1.geoObjects.add(placemark16);
  map1.geoObjects.add(placemark17);
  map1.geoObjects.add(placemark18);
  map1.geoObjects.add(placemark19);
  map1.geoObjects.add(placemark20);
  map1.geoObjects.add(placemark21);
  map1.geoObjects.add(placemark22);
  map1.geoObjects.add(placemark23);
  map1.geoObjects.add(placemark24);
  map1.geoObjects.add(placemark25);
  map1.geoObjects.add(placemark26);
  map1.geoObjects.add(placemark27);
  map1.geoObjects.add(placemark28);
  map1.geoObjects.add(placemark29);
  map1.geoObjects.add(placemark30);
  map1.geoObjects.add(placemark31);
  map1.geoObjects.add(placemark32);
  map1.geoObjects.add(placemark33);
  map1.geoObjects.add(placemark34);
  map1.geoObjects.add(placemark35);
  map1.geoObjects.add(placemark36);
  map1.geoObjects.add(placemark37);
  map1.geoObjects.add(placemark38);
  map1.geoObjects.add(placemark39);
  map1.geoObjects.add(placemark40);
  map1.geoObjects.add(placemark41);
  map1.geoObjects.add(placemark42);
  map1.geoObjects.add(placemark43);
  map1.geoObjects.add(placemark44);
  map1.geoObjects.add(placemark45);
  map1.geoObjects.add(placemark46);
  map1.geoObjects.add(placemark47);
  map1.geoObjects.add(placemark48);
  map1.geoObjects.add(placemark49);
  map1.geoObjects.add(placemark50);
  map1.geoObjects.add(placemark51);
  map1.geoObjects.add(placemark52);
  map1.geoObjects.add(placemark53);
  map1.geoObjects.add(placemark54);
  map1.geoObjects.add(placemark55);
  map1.geoObjects.add(placemark56);
  map1.geoObjects.add(placemark57);
  map1.geoObjects.add(placemark58);
  map1.geoObjects.add(placemark59);
  map1.geoObjects.add(placemark60);
}






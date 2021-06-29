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
}






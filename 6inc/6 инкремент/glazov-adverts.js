ymaps.ready(init);

   function init() {
     var map1 = new ymaps.Map("map", {
        center: [58.1409, 52.6743],
        zoom: 14       
          }, {
             balloonMaxWidth: 600
   });
  
   map1.events.add('click', function (e) {
        if (!map1.balloon.isOpen()) {
            var coords = e.get('coords');
            map1.balloon.open(coords, {
                contentHeader:'Координаты',
                contentBody:'<p>Координаты щелчка: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>'               
            });
        }
        else {
            map1.balloon.close();
        }
    });

    map1.events.add('contextmenu', function (e) {
        map1.hint.open(e.get('coords'), 'Координаты');
    });
    
    map1.events.add('balloonopen', function (e) {
        map1.hint.close();
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
                      [58.142491, 52.640815],
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

  var placemark61 = new ymaps.Placemark(
                       [58.143136, 52.580462],
                       {
  balloonContentHeader: '<a href = "#">РК 61</a><br>' +
  '<p align="justify">Адрес: напротив д.3 по ул.Ярская. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 61',
  iconContent: '61',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark62 = new ymaps.Placemark(
                       [58.136317, 52.657747],
                       {
  balloonContentHeader: '<a href = "#">РК 62</a><br>' +
  '<p align="justify">Адрес: в р-не д.65 по ул.Пряженникова. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая. Размер РК: 3 х 9. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 62',
  iconContent: '62',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark63 = new ymaps.Placemark(
                       [58.117228, 52.662476],
                       {
  balloonContentHeader: '<a href = "#">РК 63</a><br>' +
  '<p align="justify">Адрес: Окружное шоссе. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 63',
  iconContent: '63',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark64 = new ymaps.Placemark(
                       [58.118202, 52.657239],
                       {
  balloonContentHeader: '<a href = "#">РК 64</a><br>' +
  '<p align="justify">Адрес: Окружное шоссе. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 64',
  iconContent: '64',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark65 = new ymaps.Placemark(
                       [58.118814, 52.654492],
                       {
  balloonContentHeader: '<a href = "#">РК 65</a><br>' +
  '<p align="justify">Адрес: Окружное шоссе. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 65',
  iconContent: '65',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark66 = new ymaps.Placemark(
                       [58.144360, 52.654007],
                       {
  balloonContentHeader: '<a href = "#">РК 66</a><br>' +
  '<p align="justify">Адрес: на территории парка им."М.Горького". Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 66',
  iconContent: '66',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark67 = new ymaps.Placemark(
                       [53.820909, 21.658554],
                       {
  balloonContentHeader: '<a href = "#">РК 67</a><br>' +
  '<p align="justify">Адрес: на территории парка им."М.Горького". Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/Xp3h9C8"><img src="https://i.ibb.co/rMcCgws/67.jpg" height="250" width="400"></a>',
  hintContent: 'РК 67',
  iconContent: '67',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark68 = new ymaps.Placemark(
                       [58.140676, 52.679274],
                       {
  balloonContentHeader: '<a href = "#">РК 68</a><br>' +
  '<p align="justify">Адрес: в р-не д.1 на пл.Свободы. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/J3jf2TP"><img src="https://i.ibb.co/8YgW2wV/68.jpg" height="250" width="400"></a>',
  hintContent: 'РК 68',
  iconContent: '68',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark69 = new ymaps.Placemark(
                       [58.137003, 52.686805],
                       {
  balloonContentHeader: '<a href = "#">РК 69</a><br>' +
  '<p align="justify">Адрес: в р-не д.2 по ул.Будённого. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/87w5m0h"><img src="https://i.ibb.co/kST8Gxd/69.jpg" height="250" width="400"></a>',
  hintContent: 'РК 69',
  iconContent: '69',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark70 = new ymaps.Placemark(
                       [58.141767, 52.672099],
                       {
  balloonContentHeader: '<a href = "#">РК 70</a><br>' +
  '<p align="justify">Адрес: в р-не д.13 на пл.Свободы. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с двумя информационными полями. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/9gq1p2V"><img src="https://i.ibb.co/zxSBmb7/70.jpg" height="250" width="400"></a>',
  hintContent: 'РК 70',
  iconContent: '70',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark71 = new ymaps.Placemark(
                       [58.141999, 52.687790],
                       {
  balloonContentHeader: '<a href = "#">РК 71</a><br>' +
  '<p align="justify">Адрес: на пересечении ул.Калинина и ул.Карла Маркса. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с двумя информационными полями. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/MPJ8Dzv"><img src="https://i.ibb.co/1R4sfCg/71.jpg" height="250" width="400"></a>',
  hintContent: 'РК 71',
  iconContent: '71',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark72 = new ymaps.Placemark(
                       [58.141056, 52.686529],
                       {
  balloonContentHeader: '<a href = "#">РК 72</a><br>' +
  '<p align="justify">Адрес: напротив д.2 по ул.Калинина. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/9w2XQFD"><img src="https://i.ibb.co/Jx2LDf1/72.jpg" height="250" width="400"></a>',
  hintContent: 'РК 72',
  iconContent: '72',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark73 = new ymaps.Placemark(
                       [58.122048, 52.698472],
                       {
  balloonContentHeader: '<a href = "#">РК 73</a><br>' +
  '<p align="justify">Адрес: в р-не д.3 по Красногорскому тракту. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 73',
  iconContent: '73',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark74 = new ymaps.Placemark(
                       [58.123375, 52.699112],
                       {
  balloonContentHeader: '<a href = "#">РК 74</a><br>' +
  '<p align="justify">Адрес: в р-не д.3 по Красногорскому тракту. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/Qc0WC7Y"><img src="https://i.ibb.co/8BkydnP/74.jpg" height="250" width="400"></a>',
  hintContent: 'РК 74',
  iconContent: '74',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark75 = new ymaps.Placemark(
                       [58.135886, 52.662296],
                       {
  balloonContentHeader: '<a href = "#">РК 75</a><br>' +
  '<p align="justify">Адрес: в р-не д.24 по Красногорскому тракту. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 75',
  iconContent: '75',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark76 = new ymaps.Placemark(
                       [58.119130, 52.698730],
                       {
  balloonContentHeader: '<a href = "#">РК 76</a><br>' +
  '<p align="justify">Адрес: в р-не д.24 по Красногорскому тракту. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  hintContent: 'РК 76',
  iconContent: '76',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark77 = new ymaps.Placemark(
                       [58.135844, 52.662344],
                       {
  balloonContentHeader: '<a href = "#">РК 77</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, по ул.Пряженникова (в р-не северной кольцевой развязки). Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/YWhz12J"><img src="https://i.ibb.co/7zKwZvB/77.jpg" height="250" width="400"></a>',
  hintContent: 'РК 77',
  iconContent: '77',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark78 = new ymaps.Placemark(
                       [58.129285, 52.603566],
                       {
  balloonContentHeader: '<a href = "#">РК 78</a><br>' +
  '<p align="justify">Адрес: на фасаде д.1 ул. 70 лет Октября. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: МО "Город Глазов", ОУ МБУК КСЦ "Победа" (стр.138, стр.132)</p>',
  hintContent: 'РК 78',
  iconContent: '78',
    }, {
    preset:"islands#darkOrangeIcon",
    }
  );

  var placemark79 = new ymaps.Placemark(
                       [53.820303, 21.658100],
                       {
  balloonContentHeader: '<a href = "#">РК 79</a><br>' +
  '<p align="justify">Адрес: на ограждении территории д.38 по ул.Кирова. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: МО "Город Глазов" ОУ МАУ СКК "Прогресс" (стр.134, стр.135). Кадастровый номер: 18:28:000042:42.</p>',
  balloonContentBody: '<a href="https://ibb.co/6Zs7MLk"><img src="https://i.ibb.co/j54PNsS/79.jpg" height="250" width="400"></a>',
  hintContent: 'РК 79',
  iconContent: '79',
    }, {
    preset:"islands#darkOrangeIcon",
    }
  );

  var placemark80 = new ymaps.Placemark(
                       [58.135314, 52.678914],
                       {
  balloonContentHeader: '<a href = "#">РК 80</a><br>' +
  '<p align="justify">Адрес: в р-не д.20 по ул.Сибирской. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/WzxwsS1"><img src="https://i.ibb.co/t2mt3y5/80.jpg" height="400" width="250"></a>',
  hintContent: 'РК 80',
  iconContent: '80',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark81 = new ymaps.Placemark(
                       [58.135407, 52.678843],
                       {
  balloonContentHeader: '<a href = "#">РК 81</a><br>' +
  '<p align="justify">Адрес: в р-не д.20 по ул.Сибирской. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/3C0bh6C"><img src="https://i.ibb.co/MCRHNwC/81.jpg" height="400" width="250"></a>',
  hintContent: 'РК 81',
  iconContent: '81',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark82 = new ymaps.Placemark(
                       [58.139534, 52.682639],
                       {
  balloonContentHeader: '<a href = "#">РК 82</a><br>' +
  '<p align="justify">Адрес: напротив д.38 по ул.Толстого. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/qmvfHvp"><img src="https://i.ibb.co/0YxS0xr/82.jpg" height="250" width="400"></a>',
  hintContent: 'РК 82',
  iconContent: '82',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark83 = new ymaps.Placemark(
                       [58.139654, 52.682289],
                       {
  balloonContentHeader: '<a href = "#">РК 83</a><br>' +
  '<p align="justify">Адрес: напротив д.38 по ул.Толстого. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х .1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/6gGcCq6"><img src="https://i.ibb.co/PwJsHVB/83.jpg" height="250" width="400"></a>',
  hintContent: 'РК 83',
  iconContent: '83',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark84 = new ymaps.Placemark(
                       [58.139776, 52.681933],
                       {
  balloonContentHeader: '<a href = "#">РК 84</a><br>' +
  '<p align="justify">Адрес: напротив д.38 по ул.Толстого. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/c6ZcZGg"><img src="https://i.ibb.co/qNcMcty/84.jpg" height="250" width="400"></a>',
  hintContent: 'РК 84',
  iconContent: '84',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark85 = new ymaps.Placemark(
                       [58.139897, 52.681576],
                       {
  balloonContentHeader: '<a href = "#">РК 85</a><br>' +
  '<p align="justify">Адрес: напротив д.38 по ул.Толстого. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2. х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/92h0GHc"><img src="https://i.ibb.co/vmhWD4V/85.jpg" height="250" width="400"></a>',
  hintContent: 'РК 85',
  iconContent: '85',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark86 = new ymaps.Placemark(
                       [58.140020, 52.681220],
                       {
  balloonContentHeader: '<a href = "#">РК 86</a><br>' +
  '<p align="justify">Адрес: напротив д.38 по ул.Толстого. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2. х 1.8. Собственник: гос.собствнность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/4Wkw7S2"><img src="https://i.ibb.co/Q907fHk/86.jpg" height="250" width="400"></a>',
  hintContent: 'РК 86',
  iconContent: '86',
    }, {
    preset:"islands#yellowIcon",
    }
  );

  var placemark87 = new ymaps.Placemark(
                       [58.138317, 52.641062],
                       {
  balloonContentHeader: '<a href = "#">РК 87</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Пряженникова, д.6. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: ООО "АНТ".</p>',
  balloonContentBody: '',
  hintContent: 'РК 87',
  iconContent: '87',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark88 = new ymaps.Placemark(
                       [58.138306, 52.641040],
                       {
  balloonContentHeader: '<a href = "#">РК 88</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Пряженникова, д.6. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: ООО "АНТ".</p>',
  balloonContentBody: '',
  hintContent: 'РК 88',
  iconContent: '88',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark89 = new ymaps.Placemark(
                       [58.124258, 52.656400],
                       {
  balloonContentHeader: '<a href = "#">РК 89</a><br>' +
  '<p align="justify">Адрес: на воздушной теплотрассе, расположенной в районе здания № 23 по ул.Циолковского. Вид РК: баннерная растяжка (2 стороны). Тип РК: двухсторонняя баннерная растяжка на воздушной теплотрассе. Размер РК: 1 х 9. Собственник: МО "Город Глазов" ХВ ГУП ГТС (стр.137).</p>',
  balloonContentBody: '<a href="https://ibb.co/gmrXdLG"><img src="https://i.ibb.co/hLgncJk/89.jpg" height="250" width="400"></a>',
  hintContent: 'РК 89',
  iconContent: '89',
    }, {
    preset:"islands#greenIcon",
    }
  );

  var placemark90 = new ymaps.Placemark(
                       [58.122122, 52.698977],
                       {
  balloonContentHeader: '<a href = "#">РК 90</a><br>' +
  '<p align="justify">Адрес: в р-не здания № 3 по Красногорскому тракту. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/Vj5CR1Q"><img src="https://i.ibb.co/mDgykjX/90.jpg" height="250" width="400"></a>',
  hintContent: 'РК 90',
  iconContent: '90',
    }, {
    preset:"islands#redIcon",
    }
  );

  var placemark91 = new ymaps.Placemark(
                        [58.124062, 52.698796],
                        {
  balloonContentHeader: '<a href = "#">РК 91</a><br>' +
  '<p align="justify"></p>',
  balloonContentBody: '<a href="https://ibb.co/r2Dyjjh"><img src="https://i.ibb.co/wh56kkq/91.jpg" height="250" width="400"></a>',
  hintContent: 'РК 91',
  iconContent: '91',
    }, {
    preset: "islands#redIcon",
    }
  );
  
  var placemark92 = new ymaps.Placemark(
                        [],
                        {
  balloonContentHeader: '<a href = "#">РК 92</a><br>' +
  '<p align="justify"></p>',
  balloonContentBody: '',
  hintContent: 'РК 92',
  iconContent: '92',
    }, {
    preset: "islands#redIcon",
    }
  ); 

  var placemark93 = new ymaps.Placemark(
                        [],
                        {
  balloonContentHeader: '<a href = "#">РК 93</a><br>' +
  '<p align="justify"></p>',
  balloonContentBody: '',
  hintContent: 'РК 93',
  iconContent: '93',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark94 = new ymaps.Placemark(
                        [],
                        {
  balloonContentHeader: '<a href = "#">РК 94</a><br>' +
  '<p align="justify"></p>',
  balloonContentBody: '',
  hintContent: 'РК 94',
  iconContent: '94',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark95 = new ymaps.Placemark(
                        [],
                        {
  balloonContentHeader: '<a href = "#">РК 95</a><br>' +
  '<p align="justify"></p>',
  balloonContentBody: '',
  hintContent: 'РК 95',
  iconContent: '95',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark96 = new ymaps.Placemark(
                        [],
                        {
  balloonContentHeader: '<a href = "#">РК 96</a><br>' +
  '<p align="justify"></p>',
  balloonContentBody: '',
  hintContent: 'РК 96',
  iconContent: '96',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark97 = new ymaps.Placemark(
                        [58.136941, 52.686531],
                        {
  balloonContentHeader: '<a href = "#">РК 97</a><br>' +
  '<p align="justify">Адрес: в р-не д.2 по ул. Будённого. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '',
  hintContent: 'РК 97',
  iconContent: '97',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark98 = new ymaps.Placemark(
                        [58.136233, 52.658550],
                        {
  balloonContentHeader: '<a href = "#">РК 98</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Пряженникова, д.67. Вид РК: билборд. Размер РК: 3 х 6. Собственник: Батюкова Алевтина Петровна. Кадастровый номер: 18:28:000054:155./p>',
  balloonContentBody: '',
  hintContent: 'РК 98',
  iconContent: '98',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark99 = new ymaps.Placemark(
                        [58.151533, 52.639978],
                        {
  balloonContentHeader: '<a href = "#">РК 99</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Глинки, д.2. Вид РК: рекламные щиты. Тип РК: односторонние. Собстенник: Шишкин Николай Петрович. Кадастровый номер: 18:28:000001:336.</p>',
  balloonContentBody: '',
  hintContent: 'РК 99',
  iconContent: '99',
    }, {
    preset: "islands#darkOrangeIcon",
    }
  );

  var placemark100 = new ymaps.Placemark(
                        [58.136238, 52.644708],
                        {
  balloonContentHeader: '<a href = "#">РК 100</a><br>' +
  '<p align="justify">Адрес: ул.Энгельса, 30а. Вид РК: баннерная растяжка (1 сторона). Тип РК: баннерная растяжка на фасаде здания. Размер РК: 3 х 9. Собственник: бюджетное учреждение социального обслуживания Удмуртской Республики "Комплексный центр социального обслуживания населения города".</p>',
  balloonContentBody: '',
  hintContent: 'РК 100',
  iconContent: '100',
    }, {
    preset: "islands#greenIcon",
    }
  );

  var placemark101 = new ymaps.Placemark(
                        [58.140752, 52.695683],
                        {
  balloonContentHeader: '<a href = "#">РК 101</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Калинина, 12. Вид РК: билборд. Тип РК: отдельно стоящая двухcторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения. Кадастровый номер: 18:28:000034:4592.</p>',
  balloonContentBody: '',
  hintContent: 'РК 101',
  iconContent: '101',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark102 = new ymaps.Placemark(
                        [58.137513, 52.645450],
                        {
  balloonContentHeader: '<a href = "#">РК 102</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Пряженникова, 8. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с двумя информационными полями. Размер: 3 х 6 (2 шт). Собственник: общество с ограниченной ответственностью "Динамо". Кадастровый номер: 18:28:000054:273.</p>',
  balloonContentBody: '',
  hintContent: 'РК 102',
  iconContent: '102',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark103 = new ymaps.Placemark(
                        [58.136810, 52.689299],
                        {
  balloonContentHeader: '<a href = "#">РК 103</a><br>' +
  '<p align="justify">Адрес: в р-не д.40 по ул.Толстого. Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '',
  hintContent: 'РК 103',
  iconContent: '103',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark104 = new ymaps.Placemark(
                        [],
                        {
  balloonContentHeader: '<a href = "#">РК 104</a><br>' +
  '<p align="justify">Адрес: в р-не земельного участка с кадастровым номером 18:28:000068:254. Вид РК: сити-формат. Тип РК: отдельно стоящая двухсторонняя с двумя информационными полями малого формата. Размер РК: 1.2 х 1.8. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '',
  hintContent: 'РК 104',
  iconContent: '104',
    }, {
    preset: "islands#yellowIcon",
    }
  );

  var placemark105 = new ymaps.Placemark(
                        [58.133990, 52.665953],
                        {
  balloonContentHeader: '<a href = "#">РК 105</a><br>' +
  '<p align="justify">Адрес: ул.Сулимова, 88. Вид РК: баннерная растяжка (1 сторона). Тип РК: баннерная растяжка на фасаде здания. Размер РК: 6.5 х 4.5. Собственник: МУП ЖКУ (Хозяйственное ведение).</p>',
  balloonContentBody: '',
  hintContent: 'РК 105',
  iconContent: '105',
    }, {
    preset: "islands#greenIcon",
    }
  );

  var placemark106 = new ymaps.Placemark(
                        [58.134109, 52.665073],
                        {
  balloonContentHeader: '<a href = "#">РК 106</a><br>' +
  '<p align="justify">Адрес: ул.Сулимова, 88. Вид РК: баннерная растяжка (1 сторона). Тип РК: баннерная растяжка на фасаде здания. Размер РК: 2.2 х 4.5. Собственник: МУП ЖКУ (Хозяйственное управление).</p>',
  balloonContentBody: '',
  hintContent: 'РК 106',
  iconContent: '106',
    }, {
    preset: "islands#greenIcon",
    }
  );

  var placemark107 = new ymaps.Placemark(
                        [58.140446, 52.645335],
                        {
  balloonContentHeader: '<a href = "#">РК 107</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Советская, 33. Вид РК: пиллар. Тип РК: отдельно стоящая двухсторонняя конструкция с двумя информационными полями малого формата. Размер РК: 3.5 х 1. Собственник: Кытманова Зоя Афанасьевна. Кадастровый номер: 18:28:000041:2.</p>',
  balloonContentBody: '<a href="https://ibb.co/mbtPs1J"><img src="https://i.ibb.co/HBY9v17/107.jpg" height="250" width="400"></a>',
  hintContent: 'РК 107',
  iconContent: '107',
    }, {
    preset: "islands#darkBlueIcon",
    }
  );

  var placemark108 = new ymaps.Placemark(
                        [58.146115, 52.634571],
                        {
  balloonContentHeader: '<a href = "#">РК 108</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Глинки, 4в. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: Гавшин Александр Викторович. Кадастровый номер: 18:28:000001:409.</p>',
  balloonContentBody: '',
  hintContent: 'РК 108',
  iconContent: '108',
    }, {
    preset: "islands#darkOrangeIcon",
    }
  );

  var placemark109 = new ymaps.Placemark(
                        [58.146069, 52.634946],
                        {
  balloonContentHeader: '<a href = "#">РК 109</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Глинки, 4в. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: Гавшин Александр Викторович. Кадастровый номер: 18:28:000001:409.</p>',
  balloonContentBody: '',
  hintContent: 'РК 109',
  iconContent: '109',
    }, {
    preset: "islands#darkOrangeIcon",
    }
  );

  var placemark110 = new ymaps.Placemark(
                        [58.146064, 52.634453],
                        {
  balloonContentHeader: '<a href = "#">РК 110</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Глинки, 4в. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: Гавшин Александр Викторович. Кадастровый номер: 18:28:000001:409.</p>',
  balloonContentBody: '',
  hintContent: 'РК 110',
  iconContent: '110',
    }, {
    preset: "islands#darkOrangeIcon",
    }
  );

   var placemark111 = new ymaps.Placemark(
                        [58.149608, 52.638337],
                        {
  balloonContentHeader: '<a href = "#">РК 111</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Глинки, 46. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: Гавшин Александр Петрович. Кадастровый номер: 18:28:000001:408.</p>',
  balloonContentBody: '',
  hintContent: 'РК 111',
  iconContent: '111',
    }, {
    preset: "islands#darkOrangeIcon",
    }
  );

   var placemark112 = new ymaps.Placemark(
                        [58.149608, 52.638347],
                        {
  balloonContentHeader: '<a href = "#">РК 112</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Глинки, 4б. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: Гавшин Александр Викторович. Кадастровый номер: 18:28:000001:408.</p>',
  balloonContentBody: '',
  hintContent: 'РК 112',
  iconContent: '112',
    }, {
    preset: "islands#darkOrangeIcon",
    }
  );

   var placemark113 = new ymaps.Placemark(
                        [58.149931, 52.638734],
                        {
  balloonContentHeader: '<a href = "#">РК 113</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Глинки, 4б. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: Гавшин Александр Викторович. Кадастровый номер: 18:28:000001:408.</p>',
  balloonContentBody: '',
  hintContent: 'РК 113',
  iconContent: '113',
    }, {
    preset: "islands#darkOrangeIcon",
    }
  );

  var placemark114 = new ymaps.Placemark(
                        [58.150061, 52.638830],
                        {
  balloonContentHeader: '<a href = "#">РК 114</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по ул.Глинки, 4б. Вид РК: рекламные щиты. Тип РК: односторонние. Собственник: Гавшин Александр Викторович. Кадастровый номер: 18:28:000001:408.</p>',
  balloonContentBody: '',
  hintContent: 'РК 114',
  iconContent: '114',
    }, {
    preset: "islands#darkOrangeIcon",
    }
  );

   var placemark115 = new ymaps.Placemark(
                       [58.140307, 52.672247],
                        {
  balloonContentHeader: '<a href = "#">РК 115</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка по пл.Свободы, 8. Вид РК: пиллар. Тип РК: отдельно стоящая двухсторонняя конструкция с двумя информационными полями малого формата. Размер РК: 3.5 х 1. Собственник: Гавшин Александр Викторович. Кадастровый номер: 18:28:000046:51.</p>',
  balloonContentBody: '',
  hintContent: 'РК 115',
  iconContent: '115',
    }, {
    preset: "islands#darkBlueIcon",
    }
  );

   var placemark116 = new ymaps.Placemark(
                        [58.140652, 52.697744],
                        {
  balloonContentHeader: '<a href = "#">РК 116</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, на пересечении ул.Пехтина и ул.Калинина. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с двумя информационными полями. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/58VhRR9"><img src="https://i.ibb.co/J7Pjssd/116.jpg" height="250" width="400"></a>',
  hintContent: 'РК 116',
  iconContent: '116',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark117 = new ymaps.Placemark(
                        [58.132051, 52.690216],
                        {
  balloonContentHeader: '<a href = "#">РК 117</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, по ул.Пехтина (напротив многоквартирного дома №24). Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/R9LkV5C"><img src="https://i.ibb.co/6m67fd4/117.jpg" height="250" width="400"></a>',
  hintContent: 'РК 117',
  iconContent: '117',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark118 = new ymaps.Placemark(
                        [58.132691, 52.690980],
                        {
  balloonContentHeader: '<a href = "#">РК 118</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, по ул.Пехтина (напротив многоквартирного дома № 24). Вид РК: билборд. Тип РК: отдельно стоящая двухстороння щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/WPqJbpt"><img src="https://i.ibb.co/3MGZDYz/118.jpg" height="250" width="400"></a>',
  hintContent: 'РК 118',
  iconContent: '118',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark119 = new ymaps.Placemark(
                        [58.138904, 52.697078],
                        {
  balloonContentHeader: '<a href = "#">РК 119</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, по ул.Пехтина (напротив многоквартирного дома № 10). Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/7Ry7Wz8"><img src="https://i.ibb.co/mXzQqB1/119.jpg" height="250" width="400"></a>',
  hintContent: 'РК 119',
  iconContent: '119',
    }, {
    preset: "islands#redIcon",
    }
  );

   var placemark120 = new ymaps.Placemark(
                        [58.138408, 52.696920],
                        {
  balloonContentHeader: '<a href = "#">РК 120</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, по ул.Пехтина (напротив многоквартирного дома № 10). Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего формата. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/Ypb8hhm"><img src="https://i.ibb.co/J5C2HHV/120.jpg" height="250" width="400"></a>',
  hintContent: 'РК 120',
  iconContent: '120',
    }, {
    preset: "islands#redIcon",
    }
  );

   var placemark121 = new ymaps.Placemark(
                        [58.126674, 52.701318],
                        {
  balloonContentHeader: '<a href = "#">РК 121</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, по ул.Сибирской (в районе жилого дома № 107). Вид РК: билборд. Тип РК: отдельно стоящая двухсторонняя щитовая среднего размера. Размре РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/qFY5sBB"><img src="https://i.ibb.co/R4Ty022/121.jpg" height="250" width="400"></a>',
  hintContent: 'РК 121',
  iconContent: '121',
    }, {
    preset: "islands#redIcon",
    }
  );

   var placemark122 = new ymaps.Placemark(
                        [58.144038, 52.632040],
                        {
  balloonContentHeader: '<a href = "#">РК 122</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, в районе пересечения улиц Кирова-Глинки. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с тремя информационными полями. Размер РК: 3 х 6 (3 шт.). Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/PY6Yzj4"><img src="https://i.ibb.co/4fVfgtM/122.jpg" height="250" width="400"></a>',
  hintContent: 'РК 122',
  iconContent: '122',
    }, {
    preset: "islands#redIcon",
    }
  );

  var placemark123 = new ymaps.Placemark(
                        [58.136794, 52.677583],
                        {
  balloonContentHeader: '<a href = "#">РК 123</a><br>' +
  '<p align="justify">Адрес: на территории земельного участка, в р-не пересечения улиц Карла Маркса-Сибирская. Вид РК: билборд. Тип РК: отдельно стоящая односторонняя щитовая среднего формата с тремя информационными полями. Размер РК: 3 х 6. Собственник: гос.собственность до разграничения.</p>',
  balloonContentBody: '<a href="https://ibb.co/PcD3Yhh"><img src="https://i.ibb.co/3pRGsNN/123.jpg" height="250" width="400"></a>',
  hintContent: 'РК 123',
  iconContent: '123',
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
  map1.geoObjects.add(placemark61);
  map1.geoObjects.add(placemark61);
  map1.geoObjects.add(placemark62);
  map1.geoObjects.add(placemark63);
  map1.geoObjects.add(placemark64);
  map1.geoObjects.add(placemark65);
  map1.geoObjects.add(placemark66);
  map1.geoObjects.add(placemark67);
  map1.geoObjects.add(placemark68);
  map1.geoObjects.add(placemark69);
  map1.geoObjects.add(placemark70);
  map1.geoObjects.add(placemark71);
  map1.geoObjects.add(placemark72);
  map1.geoObjects.add(placemark73);
  map1.geoObjects.add(placemark74);
  map1.geoObjects.add(placemark75);
  map1.geoObjects.add(placemark76);
  map1.geoObjects.add(placemark77);
  map1.geoObjects.add(placemark78);
  map1.geoObjects.add(placemark79);
  map1.geoObjects.add(placemark80);
  map1.geoObjects.add(placemark81);
  map1.geoObjects.add(placemark82);
  map1.geoObjects.add(placemark83);
  map1.geoObjects.add(placemark84);
  map1.geoObjects.add(placemark85);
  map1.geoObjects.add(placemark86);
  map1.geoObjects.add(placemark87);
  map1.geoObjects.add(placemark88);
  map1.geoObjects.add(placemark89);
  map1.geoObjects.add(placemark90);
  map1.geoObjects.add(placemark91);
  map1.geoObjects.add(placemark92);
  map1.geoObjects.add(placemark93);
  map1.geoObjects.add(placemark94);
  map1.geoObjects.add(placemark95);
  map1.geoObjects.add(placemark96);
  map1.geoObjects.add(placemark97);
  map1.geoObjects.add(placemark98);
  map1.geoObjects.add(placemark99);
  map1.geoObjects.add(placemark100);
  map1.geoObjects.add(placemark101);
  map1.geoObjects.add(placemark102);
  map1.geoObjects.add(placemark103);
  map1.geoObjects.add(placemark104);
  map1.geoObjects.add(placemark105);
  map1.geoObjects.add(placemark106);
  map1.geoObjects.add(placemark107);
  map1.geoObjects.add(placemark108);
  map1.geoObjects.add(placemark109);
  map1.geoObjects.add(placemark110);
  map1.geoObjects.add(placemark111);
  map1.geoObjects.add(placemark112);
  map1.geoObjects.add(placemark113);
  map1.geoObjects.add(placemark114);
  map1.geoObjects.add(placemark115);
  map1.geoObjects.add(placemark116);
  map1.geoObjects.add(placemark117);
  map1.geoObjects.add(placemark119);
  map1.geoObjects.add(placemark120);
  map1.geoObjects.add(placemark121);
  map1.geoObjects.add(placemark122);
  map1.geoObjects.add(placemark123);    
}






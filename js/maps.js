function initMap() {
                    var mapDiv = document.getElementById('map');
                    var map = new google.maps.Map(mapDiv, {
                        center: {lat: 38.630553, lng: -90.198521},
                        minZoom: 10,
                        maxZoom: 19,
                        zoom: 14
                        
                    });
                    var iconbase = "/images/icons/";
                    var redpin = "redpin-16.png";
                    var homepin = "homepin-16.png";
                    var bluepin = "bluepin-16.png";
                    var greenpin = "greenpin-16.png";
                    var pinkpin = "pinkpin-16,png";
                    var purplepin = "purplepin-16.png";
                    var yellowpin = "yellowpin-16.png";
                    var orangepin = "orangepin-16.png"; 
                    // Marker Descriptions
                    // frankly this could be cleaned up some but for now it is functional
    
                    //blank template  
                        // var home = '<div id="content"><h3 id="markerName"></h3>'+'<p id="desc"> </p></div>';

                    var busch = '<div id="content"><h3 id="markerName">Busch Stadium – 0.7 Mi</h3>'+
                        '<p id="desc">Home to none other than our very own St. Louis Cardinals. The game is only a few minutes away and you can catch a free shuttle from Alumni to the game saving you the hassle of trying to drive or park. Watch the Cardinals make history as we bring home yet another World Series win!</p></div>';
                    var arch = '<div id="content"><h3 id="markerName">The Gateway Arch – 1.2 Mi</h3>'+
                        '<p id="desc">St. Louis has always been the gateway to the west, so visit the Arch built to be the icon of that metaphorical gateway. The Arch is right down on the river front and has a huge park grounds for family picnics, the VP fair for the 4th of July, or just some beautiful skylines to look at.</p></div>';
                    var savvis = '<div id="content"><h3 id="markerName">Scottrade Center – 0.5 Mi</h3>'+
                        '<p id="desc">Home to our St. Louis Blues, the Scottrade Center is just a few blocks away from home for an easy walk to any home game or to one of the many concerts or events that are housed there as well.</p></div>';
                    var home = '<div id="content"><h3 id="markerName">Park Pacifc</h3>'+
                        '<p id="desc">Elevate your lifestyle at Park Pacific apartments, the premier luxury apartment community in downtown St. Louis. From the refurbished brick and masonry on the exquisite Art Deco exterior of what was once the headquarters of the Missouri Pacific Railroad to the unabashed luxury of the 230 brand new apartment homes inside, every detail has been thoughtfully planned and carefully executed for the comfort and enjoyment of Park Pacific\’s residents.</p></div>';
                    var dome = '<div id="content"><h3 id="markerName">The Edward Jones Dome</h3>'+
                        '<p id="desc">Previously home to the St. Louis Rams, also the center for many conventions throughout the year.</p></div>';
                    var zoo = '<div id="content"><h3 id="markerName">St. Louis Zoo - 5.7 Mi</h3>'+
                        '<p id="desc">The Saint Louis Zoo is one of the best zoos in the country AND it’s free. Additionally, they have a children’s petting zoo, baby goats, and one of the best sea lions exhibits with an underwater tunnel to let you see the sea lions swimming around you.</p></div>';
                    var fox = '<div id="content"><h3 id="markerName">The Fabulous Fox – 2.0 Mi</h3>'+
                        '<p id="desc">Enjoy a night at the theater, with live shows throughout the year, visit the fabulous fox website for showtimes and available ticket pricing. </p></div>';
                    var forestPark = '<div id="content"><h3 id="markerName">Forest Park – 4.2 Mi</h3>'+
                        '<p id="desc">Forest park is the biggest park in St. Louis, home to the Muny, the Zoo, the Art Museum, and so much more.You can explore the park all day and still have plenty to do tomorrow. It is a little more than a short walk away, but worth the trip.</p></div>';
                    var stlsc = '<div id="content"><h3 id="markerName">The Saint Louis Science Center – 5.8 Mi</h3>'+
                        '<p id="desc">Located on the South East side of Forest Park, the St. Louis Science Center is open daily and great for kids of all ages. With an observatory for the space nerds, a kids area for the little ones, and dinosaurs down stairs, and the Omnimax theater everyone is bound to have a great time.</p></div>';
                    var ikea = '<div id="content"><h3 id="markerName">Ikea – 3.4 Mi</h3>'+
                        '<p id="desc">One of the newer stores to open in St. Louis, Ikea furniture is affordable and versatile. Their selection can certainly take care of the needs you have, and even a few things you didn’t know you needed.</p></div>';
                    var unionStation = '<div id="content"><h3 id="markerName">Union Station – 0.5 Mi</h3>'+
                        '<p id="desc">Union Station – 0.5 Mi</p></div>';
                    var cityMuseum = '<div id="content"><h3 id="markerName">The City Museum – 0.5 Mi</h3>'+
                        '<p id="desc">The City Museum is a lot less museum and a lot more playground. With miles of tunnels, slides, a rooftop Ferris Wheel, and the World Aquarium. Event hosting for birthday parties, weddings, and so much more, or just come spend the day exploring and getting lost in this old shoe factory.</p></div>';
                    var campbell = '<div id="content"><h3 id="markerName">Campbell House Museum – 0.3 Mi</h3>'+
                        '<p id="desc">The Campbell House Museum holds many artifacts and original possessions from the fur trader and entrepreneur Robert Campbell. Built in 1851 the home is now a historic mark in St. Louis with plenty of stories to tell.</p></div>';
                    var eternalFlame = '<div id="content"><h3 id="markerName"></h3>'+
                        '<p id="desc"> </p></div>';
                    var kaufmann = '<div id="content"><h3 id="markerName">Eternal Flame Park – 0.2 Mi</h3>'+
                        '<p id="desc">Just 2 blocks away, The Eternal Flame Park provides you and your guests with space to play outdoors whether it’s frisbee or soccer. Or bring some lunch and have a picnic under the shade of a tree a relax.</p></div>';
                    var library = '<div id="content"><h3 id="markerName">St. Louis Public Library – 0.5 Mi</h3>'+
                        '<p id="desc">Whether you need to borrow a book, print something out, or do some research for your latest paper, the St. Louis Public Library is just 4 blocks away and available for you when you need it.</p></div>';
                    var dogPark = '<div id="content"><h3 id="markerName">Dog Park – 0.1 Mi</h3>'+
                        '<p id="desc">Located across the street for easy access, Park Pacific has a dag park to take your four-legged family members. We’ll provide you with a waste bag, please use it to clean up after your little friend.</p></div>';
                    var soldierMemorial = '<div id="content"><h3 id="markerName">Soldiers Memorial – 0.1 Mi</h3>'+
                        '<p id="desc">Learn some history and pay your respects to our fallen war heroes. The Soldier Memorial is just around the corner in the middle of 4 parks for easy access and places to sit nearby.</p></div>';
                    var poelkerPark = '<div id="content"><h3 id="markerName">Poelker Park – 0.2 Mi</h3>'+
                        '<p id="desc">Just 2 blocks away, Poelker Park provides a quiet place to take a relaxing walk, or a nice picnic.</p></div>';
                    var cityHall = '<div id="content"><h3 id="markerName">St. Louis City Hall</h3>'+
                        '<p id="desc">Built in 1893, this beautiful historic building is a must-see. The interior is spectacular with marble, iron railings, and a fantastic ceiling. If you enjoy history or architechture, you’ll enjoy this.</p></div>';
                    var culinaria = '<div id="content"><h3 id="markerName">Culinaria – 0.3 Mi</h3>'+
                        '<p id="desc">A smaller grocery store from the Schnuck’s brand, the Culinaria is only 3 blocks away and will take care of your grocery needs in most cases. They also have hot lunches during the day, a salad bar and nacho bar.</p></div>';
                    var cityGarden = '<div id="content"><h3 id="markerName">City Garden – 0.5 Mi</h3>'+
                        '<p id="desc">A small and quaint park with sculptures and space to have a nice quiet picnic lunch, or a stroll on a nice day. In the evenings many of the sculptures are lit and provide some romantic lighting after a night on the town.</p></div>';
                    var lacledes = '<div id="content"><h3 id="markerName">Laclede’s Landing – 1.1 Mi</h3>'+
                        '<p id="desc">Right down on the riverfront, Laclede’s Landing is where St. Louis started. Live entertainment, great food and drinks, and lively atmosphere, especially on game nights.</p></div>';
                    var mac = '<div id="content"><h3 id="markerName">Missouri Athletic Club – 0.7 Mi</h3>'+
                        '<p id="desc">One of the top Private clubs in the country, Missouri Athletic Club features a pool, spa, dinners, and plenty of sports activities for people of all ages. Host an event or see about membership by visiting their website.</p></div>';
                    var ballparkVillage = '<div id="content"><h3 id="markerName">Ballpark Village – 0.8 Mi</h3>'+
                        '<p id="desc">Just a short walk from home, St. Louis’ Ballpark Village provides live music, food and drinks, and plenty of shopping. During Cardinals games the area is busy with fans trying to watch the game on one of the many TV’s throughout the venue.</p></div>';
                    var riverboats = '<div id="content"><h3 id="markerName">Gateway Arch Riverboats – 2.3 Mi</h3>'+
                        '<p id="desc">Take a relaxing cruise along the river. These authentic replica nineteenth-century paddle-wheel riverboats. Originally build to give visitors a better look at the Arch, now home to the skyline dinner cruise featuring jazz music and buffet dinner.</p></div>';
                    var oldCathedral = '<div id="content"><h3 id="markerName">Old Cathedral Museum – 0.9 Mi</h3>'+
                        '<p id="desc">The Basilica of Saint Louis, King, more commonly referred to as The Old Cathedral, is one of the most historic buildings in St. Louis, with roots dating back to 1764 the cathedral standing there today is actually the fourth church to be built in this space.</p></div>';
                    var bluesMuseum = '<div id="content"><h3 id="markerName">National Blues Museum – 0.6 Mi</h3>'+
                        '<p id="desc">St. Louis is home of the Blues in more ways than one. Blues music also got it’s start here in the Lou. The National Blues Museum will take you on a historic tour of blues music, beginnings to now, and show you why it’s an important part of our culture and history.</p></div>';

                    // Markers
                    var locations = [
                        [dome, 38.632193, -90.188361, 1, redpin],
                        [home, 38.629710, -90.198780, 2, homepin],
                        [savvis, 38.626606, -90.202333, 3, redpin],
                        [busch, 38.622526, -90.193095, 4, redpin],
                        [arch, 38.624395, -90.184605, 5, redpin],
                        [cityMuseum, 38.624084, -90.187265, 6, redpin],
                        [oldCathedral, 38.624084, -90.187265, 7, bluepin],
                        [cityGarden, 38.626608, -90.193699, 8, greenpin],
                        [lacledes, 38.630542, -90.184771, 9, orangepin],
                        [mac, 38.630053, -90.187204, 10, orangepin],
                        [ballparkVillage, 38.623733, -90.191962, 12, redpin],
                        [kaufmann, 38.628661, -90.198730, 13, greenpin],
                        [dogPark, 38.629767, -90.199824, 14, greenpin],
                        [eternalFlame, 38.629247, -90.201412, 15, greenpin],
                        [poelkerPark, 38.627990, -90.198901, 16, greenpin],
                        [soldierMemorial, 38.629021, -90.200028, 17, redpin],
                        [cityHall, 38.626699, -90.199290, 18, bluepin],
                        [culinaria, 38.629018, -90.193609, 19, yellowpin],
                        [bluesMuseum, 38.630496, -90.189591, 20, bluepin],
                        [ikea, 38.633250, -90.244717, 21, yellowpin],
                        [library, 38.630706, -90.199387, 22, redpin],
                        [unionStation, 38.628600, -90.208001, 23, redpin],
                        [campbell, 38.631369, -90.201825, 24, bluepin],
                        [forestPark, 38.637594, -90.283964, 25, greenpin],
                        [stlsc, 38.637594, -90.283964, 26, redpin],
                        [zoo, 38.634292, -90.290907, 27, redpin],
                        [fox, 38.638942, -90.231920, 28, orangepin],
                        
                    ];
                    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
                        document.getElementById('legend'));
                    var infowindow = new google.maps.InfoWindow();
                    var legend = document.getElementById('legend');
                    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
  document.getElementById('legend'));
                    var marker, i;

                    for (i = 0; i < locations.length; i++) { 
                        marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                    map: map,
                                    icon: iconbase + locations[i][4],
                        });
                        
                        google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {
                                infowindow.setContent(locations[i][0]);
                                infowindow.open(map, marker);
                            }
                        })(marker, i));
                        
                    }
    
                    
                    
}



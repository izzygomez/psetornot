//Currently empty, but will contain script commands to pull Fusion Table Data
//to make pins for each location on the map


//Below are temporary arrays that store basic data about the user and the other psetters.
//Each array is currently filled with dummy data for the prototype stage of the application
//Optimally the arrays would be filled with information obtained from the Fusion Table
//Arrays store information in the format of ['Name', Lat, Long]

  var userloc = [['My Location', 42.361648260887, -71.0905194348]];
  var otherloc = [
      ['Person1', 42.361281194679,-71.090739104637],
      ['Person2', 42.361109910589,-71.091929775975],
      ['Person3', 42.359195019987, -71.088351164953],
      ['Person4', 42.358919686655, -71.094675498372],
      ['Person5', 42.362328, -71.091643]
    ];

//The map will always be centered on the user's location
  var myCenter = new google.maps.LatLng(userloc[0][1], userloc[0][2])

//This array contains the user and all relevant psetter's data
  var places = userloc.concat(otherloc);

//The initialize function
  function initialize() {
      var mapOptions = {
        zoom: 16,
        center: myCenter
        }
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      setMarkers(map, places);
      queryTable(map);
      map.fitBounds(bounds);
    }

  function setMarkers(map, locations){
      for (var i=0; i<locations.length; i++) {
        img = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        if (i==0) {
          img = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        }
        var mark = locations[i];
        var myLatLng = new google.maps.LatLng(mark[1], mark[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            size: new google.maps.Size(10,10),
            icon: img
          });

        }
      }
  function queryTable(map){
      var layer = new google.maps.FusionTablesLayer({
      query: {
        select: '\'Geocodable location\'',
        from: '1icaZHY14U93g_Ya9tJQ5I1LUM9_ElfLVufKGvrT8',
        where: 'shown == true'
        }
      });
      layer.setMap(map);
    }

  google.maps.event.addDomListener(window, 'load', initialize);


/* FUSION TABLE EXAMPLE CODE FOR QUERIES

temp address: https://www.google.com/fusiontables/DataSource?docid=1GgsK0J4TugNflbavLLCYUkglZjqCLCWK35j7FqwL

Table Id: 1icaZHY14U93g_Ya9tJQ5I1LUM9_ElfLVufKGvrT8
Table URL: https://www.google.com/fusiontables/embedviz?viz=GVIZ&t=TABLE&q=select+col0%2C+col9%2C+col1%2C+col2%2C+col3%2C+col5%2C+col6%2C+col7%2C+col8+from+1icaZHY14U93g_Ya9tJQ5I1LUM9_ElfLVufKGvrT8&containerId=googft-gviz-canvas
API Key: AIzaSyDjvMXmQwbpqR1Z6wBhiqRYAnUgCf5L-Ec

    https://developers.google.com/maps/documentation/javascript/fusiontableslayer

    var map;

    function initialize() {
    var chicago = new google.maps.LatLng(41.948766, -87.691497);

    map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: chicago,
    zoom: 12
    });

    var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'location',
      from: '1icaZHY14U93g_Ya9tJQ5I1LUM9_ElfLVufKGvrT8',
      where: 'shown == true, kerberos == izzyg'
      }
    });
    layer.setMap(map);

    }

google.maps.event.addDomListener(window, 'load', initialize);

*/

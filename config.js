var config = {
    style: 'mapbox://styles/blageez/ckmlk74s54pfe17lkzld4z9yu',
    accessToken: 'pk.eyJ1IjoiYmxhZ2VleiIsImEiOiJja2xyZWdnbWQwM2tiMnhtZ3F3bnRwMHZ1In0.Vp1ls4rsuKWABYadlgrhZw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'A Ride Around Stanley Park',
    subtitle: 'Let's take a ride around Vancouver's world famous park',
    byline: 'By Blagee Zhuo',
    footer: 'Please remember to be respectful when cycling and always wear a helmet!',
    chapters: [
        {
            id: 'stanleypark',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to Stanley Park',
            image: 'https://vancouver.ca/images/cov/feature/stanley-park-entrace-landing.jpg',
            description: 'Stanley Park is Vancouver's largest park and provides some of the most scenic opportunities in the lower mainland.',
            location: {
                center: [-123.11707, 49.26124],
                zoom: 11.76,
                pitch: 20.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                     layer: 'stanleypark',
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                   layer: 'stanleypark',
                   opacity: 0,
                 }
            ]
        },
        {
            id: 'seawall',
            alignment: 'right',
            hidden: false,
            title: 'The Seawall',
            image: 'https://images.dailyhive.com/20200410150010/biking-stanley-park-seawall.jpg',
            description: 'The seawall is a 10km path that wraps around Stanley Park and offers a refreshing way to experience both land and sea.',
            location: {
                center: [-123.14278, 49.30072],
                zoom: 13.86,
                pitch: 39.50,
                bearing: 41.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
              {
                   layer: 'seawall',
                   opacity: 1,
               }
            ],
            onChapterExit: []
        },
        
    ]
}

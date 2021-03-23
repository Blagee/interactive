var config = {
    style: 'mapbox://styles/blageez/ckmlk74s54pfe17lkzld4z9yu',
    accessToken: 'pk.eyJ1IjoiYmxhZ2VleiIsImEiOiJja2xyZWdnbWQwM2tiMnhtZ3F3bnRwMHZ1In0.Vp1ls4rsuKWABYadlgrhZw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'A Ride Around Stanley Park',
    subtitle: 'Take a ride around this world famous park',
    byline: 'By Blagee Zhuo',
    footer: 'Please remember to be respectful when cycling and always wear a helmet!',
    chapters: [
        {
            id: 'stanleypark',
            alignment: 'right',
            hidden: false,
            title: 'Welcome to Stanley Park',
            image: 'https://vancouver.ca/images/cov/feature/stanley-park-entrace-landing.jpg',
            description: 'Stanley Park is the largest park in Vancouver and provides some of the most scenic opportunities in the lower mainland.',
            location: {
                center: [-123.11707, 49.28338],
                zoom: 11.76,
                pitch: 20.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                     layer: 'stanleypark',
                     opacity: 1,
                 },
                 {
                      layer: 'seawall',
                      opacity: 0,
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
        {
            id: 'start',
            alignment: 'right',
            hidden: false,
            title: 'Start Line',
            image: './interactive/denman.jpeg',
            description: 'Begin your ride here at the bottom of Denman Street with your own bike, or with one you rented from any of the abundant bike shops nearby.',
            location: {
                center: [-123.13247, 49.29357],
                zoom: 16.99,
                pitch: 53.50,
                bearing: 1.49
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cannon',
            alignment: 'left',
            hidden: false,
            title: "The Nine O'Clock Gun",
            image: 'https://www.vmcdn.ca/f/files/via/images/stanley-park-cannon.jpg;w=960',
            description: 'This historic naval cannon was cast in 1816 and brough to Stanley Park in 1894. It fires every evening at precisely 9pm.',
            location: {
                center: [-123.14278, 49.30072],
                zoom: 17.14,
                pitch: 47,
                bearing: -71.30
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'lighthouse',
            alignment: 'right',
            hidden: false,
            title: 'Brockton Point Lighthouse',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Brockton_Point_Light_and_Vancouver.jpg/1280px-Brockton_Point_Light_and_Vancouver.jpg',
            description: 'Constructed in 1914, this lighthouse is a popular photo stop that looks across the Vancouver Harbour towards the North Shore.',
            location: {
                center: [-123.11710, 49.30077],
                zoom: 15.78,
                pitch: 58,
                bearing: -118.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'siwash',
            alignment: 'left',
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirdbeach',
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
                   layer: 'thirdbeach',
                   opacity: 1,
               }
            ],
            onChapterExit: []
        },
        {
            id: 'secondbeach',
            alignment: 'left',
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
        {
            id: 'lostlagoon',
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

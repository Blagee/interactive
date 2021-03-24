var config = {
  // Here is where I link my Mapbox map that is going to be used.
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
            alignment: 'right', // This determines where the textbox appears on the screen; can be left, center, right
            hidden: false, // No textbox appears when hidden = true so chapters can be used solely for movement through map
            title: 'Welcome to Stanley Park',
            image: 'https://vancouver.ca/images/cov/feature/stanley-park-entrace-landing.jpg',
            description: 'Stanley Park is the largest park in Vancouver and provides some of the most scenic opportunities in the lower mainland.',
            location: { // Following parameters determine position and viewing angle of map at chapter
                center: [-123.11707, 49.28338],
                zoom: 11.76,
                pitch: 20.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [ // An object array that determines the visibility of specified Mapbox layers. Very useful for keeping map visually clean and accurately directing attention.
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
            rotateAnimation: true, // Causes map to rotate slowly. Really nice for showing off things like circuits or, in this case, a looping trail.
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
            alignment: 'left',
            hidden: false,
            title: 'Start Line',
            image: './denman.jpg', // The direct website link was http, not https, so I downloaded the picture and added it directly to the repository.
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
                center: [-123.11753, 49.29807],
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
            alignment: 'right',
            hidden: false,
            title: "Siwash Rock, also known as 'Slhx̱í7lsh'",
            image: 'https://windows10spotlight.com/wp-content/uploads/2020/02/1161748a90f4389c03cd62f9176f06b3-1024x576.jpg',
            description: 'This iconic rock feature, known in the Squamish language as Slhx̱í7lsh, stands tall in the water off the seawall. A lone tree sits atop the seastack formed by millenia of erosion.',
            location: {
                center: [-123.15596, 49.30860],
                zoom: 16.99,
                pitch: 55.50,
                bearing: 166.42
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirdbeach',
            alignment: 'left',
            hidden: false,
            title: 'Third Beach',
            image: 'https://images.dailyhive.com/20200410150010/biking-stanley-park-seawall.jpg',
            description: 'Tucked away from the hustle and bustle, Third Beach is a wonderful place to spend time relaxing in the sun and maybe going for a swim.',
            location: {
                center: [-123.15960, 49.30529],
                zoom: 15.80,
                pitch: 48.00,
                bearing: 48.72
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
              {
                   layer: 'thirdbeach',
                   opacity: 1,
               }
            ],
            onChapterExit: [
              {
                   layer: 'thirdbeach',
                   opacity: 0,
               }
            ]
        },
        {
            id: 'secondbeach',
            alignment: 'right',
            hidden: false,
            title: 'Second Beach',
            image: 'https://www.familyfuncanada.com/vancouver/files/2012/05/secondbeach.jpg',
            description: 'In addition to a sandy shore, visitors of Second Beach can enjoy the heated outdoor pool, concession stand, and playground area.',
            location: {
                center: [-123.15184, 49.29389],
                zoom: 16.69,
                pitch: 44.50,
                bearing: 116.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'lostlagoon',
            alignment: 'left',
            hidden: false,
            title: 'Lost Lagoon',
            image: 'https://images.dailyhive.com/20200410150010/biking-stanley-park-seawall.jpg',
            description: 'The seawall is a 10km path that wraps around Stanley Park and offers a refreshing way to experience both land and sea.',
            location: {
                center: [-123.14441, 49.29448],
                zoom: 16.10,
                pitch: 48.0,
                bearing: -17.38
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
              {
                   layer: 'lostlagoon',
                   opacity: 0.5,
               }
            ],
            onChapterExit: [
              {
                   layer: 'lostlagoon',
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

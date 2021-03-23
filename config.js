  style: 'mapbox://styles/blageez/ckmlk74s54pfe17lkzld4z9yu',
    accessToken: 'pk.eyJ1IjoiYmxhZ2VleiIsImEiOiJja2xyZWdnbWQwM2tiMnhtZ3F3bnRwMHZ1In0.Vp1ls4rsuKWABYadlgrhZw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'A Ride Around Stanley Park',
    subtitle: 'Let's take a ride around Vancouver's world famous park',
    byline: 'By Blagee Zhuo',
    footer: 'Please remember to be respectful and always wear a helmet!',
    chapters: [
        {
            id: 'stanleypark',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to Stanley Park',
            image: 'https://vancouver.ca/images/cov/feature/stanley-park-entrace-landing.jpg',
            description: 'Stanley Park is Vancouver's largest park and provides some of the most scenic opportunities in the lower mainland.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

/* GET 'destinations' page */
module.exports.destination = function(req, res) {
    res.render('destination-list', {
        title: 'Travel Blog - Explore Destinations',
        pageHeader: {
            title: 'Explore Destinations',
            strapline: 'Discover amazing destinations for your next adventure!'
        },
        sidebar: "Ready to explore the world? Discover breathtaking destinations and plan your dream trip with Travel Blog.",
        destinations: [{
            name: 'Paris, France',
            description: 'Explore the romantic city of Paris with its iconic landmarks such as the Eiffel Tower and Notre-Dame Cathedral.',
            rating: 5,
            activities: ['Visit the Louvre Museum', 'Climb the Eiffel Tower', 'Stroll along the Seine River'],
            image: '/images/paris.jpg'
        }, {
            name: 'Bali, Indonesia',
            description: 'Experience the stunning beaches, lush green landscapes, and vibrant culture of Bali.',
            rating: 4,
            activities: ['Relax on the beaches', 'Visit Ubud Monkey Forest', 'Explore rice terraces'],
            image: '/images/bali.jpg'
        }, {
            name: 'New York City, USA',
            description: 'Discover the city that never sleeps with its towering skyscrapers, world-famous landmarks, and diverse neighborhoods.',
            rating: 5,
            activities: ['Visit Times Square', 'Explore Central Park', 'See the Statue of Liberty'],
            image: '/images/nyc.jpg'
        }]
    });
};

/* GET information about a specific destination */
module.exports.destinationInfo = function(req, res) {
    // This is a placeholder, replace with actual data for a specific destination
    const destinationData = {
        name: 'Paris, France',
        description: 'Explore the romantic city of Paris with its iconic landmarks such as the Eiffel Tower and Notre-Dame Cathedral.',
        rating: 5,
        activities: ['Visit the Louvre Museum', 'Climb the Eiffel Tower', 'Stroll along the Seine River'],
        image: '/images/paris.jpg'
    };

    res.render('destination-info', {
        title: destinationData.name,
        pageHeader: {
            title: destinationData.name
        },
        sidebar: {
            context: 'is a popular destination known for its romantic ambiance, stunning architecture, and rich culture.',
            callToAction: 'Plan your trip to Paris and experience the beauty of this extraordinary city.'
        },
        destination: destinationData
    });
};

/* GET the page to add a review for a destination */
module.exports.addReview = function(req, res) {
    res.render('destination');
};

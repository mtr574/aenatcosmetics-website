let app = angular.module('Aenat', []);

app.constant('DATA', {
    API_URL: '',
    // Socials
    facebook_link: 'fbk',
    instagram_link: 'ins'
});

// Reverse Filter
app.filter('reverse', function () {
    return function (items) {
        return items.slice().reverse();
    };
});

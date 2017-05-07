const app = angular.module('Aenat', []);

app.constant('DATA', {
    API_URL: '',
    // Socials
    facebook_link: 'https://www.facebook.com/aenatcosmetics',
    instagram_link: 'https://www.instagram.com/aenatben/'
});

// Reverse Filter
app.filter('reverse', () => {
    return function (items) {
        return items.slice().reverse();
    };
});

app.filter('trim', [function() {
    return function(string) {
        if (!angular.isString(string)) {
            return string;
        }
        return string.replace(/[\s]/g, '');
    };
}])

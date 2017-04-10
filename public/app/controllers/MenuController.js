app.controller('MenuController', function ($scope) {

    $scope.menuitems = [{
        title: 'אודות',
        url: 'about'
    }, {
        title: 'טיפולים',
        url: 'services'
    }, {
        title: 'לקוחות',
        url: 'clients'
    }, {
        title: 'מוצרים',
        url: 'brands'
    }, {
        title: 'יצירת קשר',
        url: 'contact'
    }];

})

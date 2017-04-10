app.controller('BrandsController', function ($scope) {

    $scope.Title = "מותגים";
    $scope.brands = [
        {
            name: 'some brand',
            img: 'images/brand-1.jpg',
            link: '#'
        }, {
            name: 'some brand',
            img: 'images/brand-2.jpg',
            link: '#'
        }
    ];

});

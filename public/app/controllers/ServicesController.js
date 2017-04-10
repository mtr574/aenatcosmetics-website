app.controller('ServicesController', function ($scope) {

    $scope.Title = "שירותים";
    $scope.Service = [{
        type: 'כללי',
        service: {
            name: 'basic color',
            info: 'info',
            url: 'url',
            price: '99'
        }
    }, {
        type: 'סוג',
        service: {
            name: 'hair remove',
            info: 'info about hair remove',
            url: 'url',
            price: '299'
        }
    }];

});

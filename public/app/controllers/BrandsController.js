app.controller('BrandsController', ($scope) => {
  $scope.Title = "מוצרים";
  $scope.brands = [{
    name: 'some brand',
    img: 'images/brands/brand-1.png',
    link: '#'
  }, {
    name: 'some brand',
    img: 'images/brands/brand-2.png',
    link: '#'
  }];
});

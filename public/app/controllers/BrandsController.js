app.controller('BrandsController', ($scope) => {
  $scope.Title = "מוצרים";
  $scope.brands = [{
    name: 'some brand',
    img: 'images/brands/brand-1.jpg',
    link: '#'
  }, {
    name: 'some brand',
    img: 'images/brands/brand-2.jpg',
    link: '#'
  }];
});

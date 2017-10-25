# angulargroup8
Angular group 8

<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28/angular.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <script type="text/javascript" src="js/products.js"></script>
  </head>
  <body ng-controller="StoreController as store">
    <!--  Store Header  -->
    <header>
      <h1 class="text-center">Flatlander Crafted Gems CHANGE SOMETHING</h1>
      <h2 class="text-center">– an Angular store –</h2>
      <p>TEST!</p>
    </header>

    <!--  Products Container  -->
    <div class="list-group">
      <!--  Product Container  -->
      <div class="list-group-item" ng-repeat="product in store.products">
        <h3>{{product.name}} <em class="pull-right">{{product.price | currency}}</em></h3>

        <!-- Image Gallery  -->
        <product-gallery></product-gallery>

        <!-- Product Tabs  -->
        <product-tabs></product-tabs>
      </div>

    </div>
  </body>
</html>

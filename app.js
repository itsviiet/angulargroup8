(function(){
    var app = angular.module('basketball', []);
<<<<<<< HEAD

    app.controller('BasketController', function(){
        this.product = basket;
    });

    app.controller("ReviewController", function(){

      this.review = {};

      this.addReview = function(product){
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
      };
    });

    var basket = [{
      place:'Havnen',
      number: 12,
      description: '. . . ',
      reviews: [{
        field: "Havnen",
        stars: 5,
        body: "Ok place",
        author: "123@gmail.com"
      }]
    },
    {
      place: 'Random',
      number: 08,
      description: '...',
      reviews: [{
        field: "random",
        stars: 4,
        body: "Ok place",
        author: "123@gmail.com"
      }]
    },
    {
      place: 'Forrest',
      number: 08,
      description: '...',
      reviews: [{
        field: "forrest",
        stars: 3,
        body: "Ok place",
        author: "123@gmail.com"
      }]
    }];
})();
=======
    
    app.controller('BasketController', function(){
        this.product = basket;
       
        
    });
    var basket =
        {
        place:'Havnen',
        number: 12,
        description: '. . . '
        }
       
        
})();

>>>>>>> d441c6306599b836a2fbfe068888d3256a60c8fc

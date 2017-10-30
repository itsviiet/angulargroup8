(function(){
    var app = angular.module('basketball', []);

    app.controller('BasketController', function(){
        this.products = basket;
            console.log(basket);
    });

    app.controller("ReviewController", function(){
      this.review = {};
        console.log();

      this.addReview = function(product){
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
      };
    });

    var basket = [{
        id: "1",
        place:'Havnepladsen',
        description: 'Basketbane på Havnepladsen. Her er også offentlige toiletter.',
        reviews: [{
            field: "Havnen",
            stars: 5,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
    {
        id: "2",
        place: 'Nonnebakken multibane',
        description: 'Multibane med fodboldmål, basketkurve og bander i grønt anlæg ved Odense å.',
        reviews: [{
            field: "Nonnebakken multibane",
            stars: 4,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
    {
        id: "3",
        place: 'Dronningensgade',
        description: 'Basketbane i boldbur på legeplads ved Dronningensgade.',
        reviews: [{
            field: "Dronningensgade",
            stars: 3,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
       {
        id: "4",
        place: 'Idrætslegepladsen i Vollsmose',
        description: 'Basketbaner på Idrætslegepladsen i Vollsmose. Her kan man også spille streetsoccer.',
        reviews: [{
            field: "Dronningensgade",
            stars: 3,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
                  {
        id: "5",
        place: 'Willeruplundparken',
        description: 'Basketkurve opsat på plæne ved legepladsen i Willeruplundparken.',
        reviews: [{
            field: "Dronningensgade",
            stars: 3,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
                  {
        id: "6",
        place: 'Børnenes Jord Multibane',
        description: 'Multibane med fodboldmål, basketkurve og bander ved legepladsen Børnenes Ø. Legepladsen ligger ved Højstrupskolen og KFUMs fodboldbaner. Her er også bålhus m.m.',
        reviews: [{
            field: "Dronningensgade",
            stars: 3,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
                  {
        id: "7",
        place: 'Motionsplads Elisevej',
        description: 'Basketbane på motionsplads ved Elisevej. Bemærk: Der går en vej på tværs, så husk at holde øje med trafikken og hinanden.',
        reviews: [{
            field: "Dronningensgade",
            stars: 3,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
                  {
        id: "8",
        place: 'Villestoftengen Multibane',
        description: 'Multibane med asfalt, bander, basketnet og fodboldmål.',
        reviews: [{
            field: "Dronningensgade",
            stars: 3,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
                  {
        id: "9",
        place: 'Korup Klubben',
        description: 'Multibane med asfalt, bander, basketnet og fodboldmål.',
        reviews: [{
            field: "Dronningensgade",
            stars: 3,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    },
        {
        id: "10",
        place: 'Godthåbsgade',
        description: 'Basketnet på græsareal i lille grønt område mellem Godthåbsgade og Hjallesevej.',
        reviews: [{
            field: "Nonnebakken multibane",
            stars: 4,
            body: "Ok place",
            author: "123@gmail.com"
      }]
    }];
})();


    


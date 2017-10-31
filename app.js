(function () {
    var app = angular.module('basketball', []);

    app.controller('BasketController', function () {
        this.products = basket;
    });

    app.controller("ReviewController", function(){
      this.review = {};

      this.addReview = function(product){
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
          console.log("submit");
      };

    });

    var basket = [{
        id: "1",
        place:'Havnepladsen',
        description: 'Basketbane på Havnepladsen. Her er også offentlige toiletter.',
        reviews: [{
            field: "Havnepladsen",
            stars: 5,
            body: "Nyt og godt!",
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
            body: "Det er godt der både er mulighed for fodbold og basket.",
            author: "456@gmail.com"
      }]
    },
    {
        id: "3",
        place: 'Dronningensgade',
        description: 'Basketbane i boldbur på legeplads ved Dronningensgade.',
        reviews: [{
            field: "Dronningensgade",
            stars: 3,
            body: "Ligger centralt og gode forhold.",
            author: "987@gmail.com"
      }]
    },
       {
        id: "4",
        place: 'Idrætslegepladsen i Vollsmose',
        description: 'Basketbaner på Idrætslegepladsen i Vollsmose. Her kan man også spille streetsoccer.',
        reviews: [{
            field: "Idrætslegepladsen i Vollsmose",
            stars: 3,
            body: "Det er et okay sted.",
            author: "246@gmail.com"
      }]
    },
                  {
        id: "5",
        place: 'Willeruplundparken',
        description: 'Basketkurve opsat på plæne ved legepladsen i Willeruplundparken.',
        reviews: [{
            field: "Willeruplundparken",
            stars: 2,
            body: "Der er både legeplads og basket, fedt!",
            author: "579@gmail.com"
      }]
    },
                  {
        id: "6",
        place: 'Børnenes Jord Multibane',
        description: 'Multibane med fodboldmål, basketkurve og bander ved legepladsen Børnenes Ø. Legepladsen ligger ved Højstrupskolen og KFUMs fodboldbaner. Her er også bålhus m.m.',
        reviews: [{
            field: "Børnenes Jord Multibane",
            stars: 4,
            body: "Ligger tæt på skoler, så et godt sted for børn.",
            author: "123@gmail.com"
      }]
    },
                  {
        id: "7",
        place: 'Motionsplads Elisevej',
        description: 'Basketbane på motionsplads ved Elisevej. Bemærk: Der går en vej på tværs, så husk at holde øje med trafikken og hinanden.',
        reviews: [{
            field: "Motionsplads Elisevej",
            stars: 1,
            body: "Der er en vej igennem stedet. Ikke godt.",
            author: "334@gmail.com"
      }]
    },
                  {
        id: "8",
        place: 'Villestoftengen Multibane',
        description: 'Multibane med asfalt, bander, basketnet og fodboldmål.',
        reviews: [{
            field: "Villestoftengen Multibane",
            stars: 3,
            body: "Mange muligheder for boldspil.",
            author: "655@gmail.com"
      }]
    },
                  {
        id: "9",
        place: 'Korup Klubben',
        description: 'Multibane med asfalt, bander, basketnet og fodboldmål.',
        reviews: [{
            field: "Korup Klubben",
            stars: 5,
            body: "Virkelig godt sted!",
            author: "333@gmail.com"
      }]
    },
        {
        id: "10",
        place: 'Godthåbsgade',
        description: 'Basketnet på græsareal i lille grønt område mellem Godthåbsgade og Hjallesevej.',
        reviews: [{
            field: "Godthåbsgade",
            stars: 4,
            body: "Godt bane til basket.",
            author: "999@gmail.com"
      }]
    }];
})();

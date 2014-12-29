angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Nothing yet...
})

.controller('SlidesCtrl', function() {
  this.slides = [
    { title: 'Monarch on Milkweed', id: 1, description: 'Photographed at Fullerton Arboretum.', thumb: 'http://scontent-a-ord.cdninstagram.com/hphotos-xaf1/t51.2885-15/10684326_1531362983746492_1615604164_a.jpg', full: 'http://photos-e.ak.instagram.com/hphotos-ak-xaf1/10684326_1531362983746492_1615604164_n.jpg' },
    { title: 'Western Tiger Swallowtail on Butterflybush', id: 2, description: 'Photographed at San Joaquin Wildlife Sanctuary in the butterfly garden.', thumb: 'http://scontent-a-sea.cdninstagram.com/hphotos-xaf1/t51.2885-15/10616710_1530333097199525_291178166_a.jpg', full: 'http://photos-f.ak.instagram.com/hphotos-ak-xaf1/10616710_1530333097199525_291178166_n.jpg' },
    { title: 'Gulf Frittilary on Milkweed', id: 3, description: 'Photographed at Fullerton Arboretum.', thumb: 'http://scontent-a-sjc.cdninstagram.com/hphotos-xaf1/t51.2885-15/10731996_1508293736096893_1855882248_a.jpg', full: 'http://photos-f.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10731996_1508293736096893_1855882248_n.jpg' },
    { title: 'Giant Swallowtail on Duranta', id: 4, description: 'Photographed at Fullerton Arboretum.', thumb: 'http://scontent-a-sjc.cdninstagram.com/hphotos-xpa1/t51.2885-15/10665272_561132997347612_1156720678_a.jpg', full: 'http://scontent-a-sjc.cdninstagram.com/hphotos-xpa1/t51.2885-15/10665272_561132997347612_1156720678_n.jpg' }
  ];
})

;

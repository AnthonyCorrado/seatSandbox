angular.module('backgroundImages',[])

.directive('backgroundImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/lgUKRCH87vnBEUJ/gwSneaks.jpg' +')',
            'background-size' : 'cover'
        });
    };
});
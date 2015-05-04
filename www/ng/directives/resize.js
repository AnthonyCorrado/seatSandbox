angular.module('resize',[])

.directive('resize', function(){
    return {
        restrict: 'EA',
        scope: true,
        link: function (scope, element, attr) {
            var width = element[0].offsetWidth;
            var height = element[0].offsetHeight;
            var body = document.body;
            var html = document.documentElement;
            var totalHeight = Math.max( body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight );

            var fixedHeight = width * 0.5625;
            var seatMapHeight = (totalHeight - fixedHeight) * 0.55;
            var seatDataHeight = (totalHeight - fixedHeight) * 0.45;

            scope.eleWidth = width;
            scope.eleHeight = height;
            scope.fixedRatio = fixedHeight;
            scope.seatMapHeight = seatMapHeight;
            scope.seatDataHeight = seatDataHeight;

        }
    };
});
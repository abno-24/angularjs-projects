(function (){
    'use strict';

    angular.module('myFirstApp', [])

    .controller('NameCalculator', function($scope){
        $scope.name = "";
        $scope.totalValue = 0;

        $scope.countNumber = function (){
            var totalNameValue = calculateStringtoNumber($scope.name);
            $scope.totalValue = totalNameValue;
        }

        function calculateStringtoNumber(string){
            var totalStringValue = 0;
            for(var i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }

    });

})();
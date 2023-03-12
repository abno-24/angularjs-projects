angular.module('myFirstAsgnmt', [])
.controller('Ctrl', function($scope){
    $scope.items = "";
    
    $scope.itemChecker = function (itemsToCount, separator) {
        itemsToCount = $scope.items;
        separator = ",";
        const arrOfItems = itemsToCount.split(separator);
        var count = arrOfItems.length;
        console.log(count);

        if(count <= 3){
            $scope.Msg = "Enjoy!"
        }else if(count > 3){
            $scope.Msg = "Too Much"
        }else{
            $scope.Msg = ""
        }
    }
})
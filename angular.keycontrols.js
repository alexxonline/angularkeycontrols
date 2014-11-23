angular.module("keyControls", [])
.directive("keyControls", function()
  {
    return {
      scope: {keyControls: "="},
      link: function($scope, $element, $attrs){
          for(key in $scope.keyControls)
          {
            var fn = $scope.keyControls[key];
            if(fn == null)
            {
              throw "Se intentó asociar una tecla sin pasar una función: " + key;
              continue;
            }
            $element.on("keydown", null, key, $scope.keyControls[key]);
          }
      }
    };
  });
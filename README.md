Angular Key Controls
==================

An angular directive adaptation of John Resig's jquery.hotkeys plugin.

#Requirements#
It requires jquery.hotkeys present, you can download from: https://github.com/jeresig/jquery.hotkeys

#Usage#
First you add the js to the page (make sure jquery.hotkeys and jquery are present).
After that you must declare a dependency on keyControls
```js
var app = angular.module("your-angular-app", [ "keyControls" ]);
```
Create in your controller a javscript object where the property name is the name of the key and the value is a reference to the function you want it to run when the key is pressed.
```js
$scope.functionM = function() {
	console.debug("m");
};
$scope.functionC = function() {
	console.debug("c");
};
$scope.functionReturn = function() {
	console.debug("return");
};
$scope.functionEsc = function () {
	console.debug("esc");
}
$scope.KeyFunctions = 
		{
			"m": $scope.functionM
			"c": $scope.functionC
			"return": $scope.functionReturn
			"esc": $scope.functionEsc
		};
```
Then you add the attribute at the component you want the keys to react	and the directive handles the rest.
```HTML
<input type="text" key-controls="KeyFunctions">
```
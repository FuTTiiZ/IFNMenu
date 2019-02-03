function ControllerIfn( $scope, $element, $rootScope )
{
	$rootScope.ShowBack = false;

	$scope.JoinServer = function ( gm )
	{
		if ( gm.password )
			lua.Run( "RunConsoleCommand( \"password\", \"" + gm.password + "\" )" );

		lua.Run( "JoinServer( \"" + gm + "\" )" );
	};

	$scope.OpenUrl = function ( url )
	{
		lua.Run( "gui.OpenURL( \"" + url + "\" )" );
	};
}

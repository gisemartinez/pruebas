steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
).then(
	function(){
		Sigma.Control(
				'Sigma.Dash'
			,	{
					defaults:{
						view:undefined
					}
				}
			,	{
					' tunning':function(){
						console.log('Dashboard')
					}
				}
			)
	}
)
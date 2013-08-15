steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
).then(
	function(){
		Sigma.Control(
				'Sigma.Prog'
			,	{
					defaults:{
						view:undefined
					}
				}
			,	{
					' tunning':function(){
						console.log('Programacion')
					}
				}
			)
	}
)
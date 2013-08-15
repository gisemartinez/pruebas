steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
).then(
	function(){
		Sigma.Control(
				'Sigma.Cotizacion'
			,	{
					defaults:{
						view:undefined
					}
				}
			,	{
					' tunning':function(){
						console.log('lo escuche')
					}
				}
			)
	}
)
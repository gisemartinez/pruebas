steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
).then(
	function(){
		Sigma.Control(
				'Sigma.Simulador'
			,	{
					defaults:{
						view:undefined
					}
				}
			,	{
					' tunning':function(){
						console.log('Simulador')
					}
				}
			)
	}
)

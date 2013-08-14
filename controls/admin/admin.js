steal(
	'pruebas/lib.js'
,	'pruebas/views/admin.mustache'
,	'pruebas/controls/sigma'
).then(
	function(){
		Sigma.Control(
				'Sigma.Admin'
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
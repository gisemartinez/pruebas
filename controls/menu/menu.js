steal(
	'pruebas/lib.js'
,	'pruebas/views/navbar.mustache'
,	'pruebas/controls/sigma'
).then(
	function(){
		Sigma.Control(
				'Menu'
			,	{
					defaults:{
						view:undefined
					}
				}
			,	{
					_render_content: function(data)
					
					}
				}
			)
	}
)
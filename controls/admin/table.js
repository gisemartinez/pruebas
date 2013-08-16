steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'pruebas/controls/admin/fila.js'
).then(
	function(){
		Sigma.Control(
				'Sigma.Table'
			,	{
					defaults:{
						view:undefined
					}
				}
			,	{	
					_render_content: function(data)
					{
						this._super(data)
						new Sigma.Fila(
								this.element.find('tr')
							,	
								{}

							)
						
						
					}
				,	' tunning':function(){
						console.log(this.options)
					}
				}
			)
	}
)
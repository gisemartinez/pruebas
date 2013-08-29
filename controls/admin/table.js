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

						this.element.find('tr')
								.each(
									function()
									{
										// console.log(can.$(this).data('fila'))
										new Sigma.Fila(
											can.$(this)
										,	{
												data:	can.$(this).data('fila')
											}
										)
									}
								)
					}
				,	' tunning':function(){
						console.log(this.options)
					}
				}
			)
	}
)
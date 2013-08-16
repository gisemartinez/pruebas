steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'pruebas/controls/admin/table.js'
,	'pruebas/views/admin/table.mustache'
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
					_render_content: function(data)
					{
						this._super(data)
						new Sigma.Table(
								this.element.find('#table-admin')
							,	
								{
									data: this.options.data
								,	view: 'pruebas/views/admin/table.mustache'
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
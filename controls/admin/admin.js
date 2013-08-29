steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'pruebas/controls/admin/table.js'
,	'pruebas/views/admin/table.mustache'
,	'pruebas/models/personajes.js'
,	'pruebas/fixtures/personajes.js'
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
						// var personajes= []
						
						// Personajes.findAll({},
						// 					function( todos ){
											  
						// 					  $.each(todos, function(i, todo){
						// 					    personajes.push( todo )
						// 					  })
						// 					})
						
						new Sigma.Table(
								this.element.find('#table-admin')
							,	
								{
									data: Personajes.findAll()
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
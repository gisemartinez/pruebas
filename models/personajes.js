steal(
	'pruebas/lib.js'
).then(
	function(){
		can.Model(
			'Personajes'
		,	{	
				findAll: 'GET /personajes.json'
			,	findOne: 'GET /personajes/{id}.json'
			,	create:  'POST /personajes.json'
				//update:  'PUT /personajes/{id}.json'
			,	destroy: 'DELETE /personajes/{id}.json'
			,	signin: function(form_data)
				{
					return	can.ajax(
								{
									url:	'/signin'
								,	data:	form_data
								,	type:	'POST'
								}
							)
				}
			,	signup: function(form_data)
				{
					return	can.ajax(
								{
									url:	'/signup'
								,	data:	form_data
								,	type:	'POST'	
								}
							)
				}
			}
		,	{
			
			}
		)
	}
)
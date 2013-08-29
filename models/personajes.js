steal(
	'pruebas/lib.js'
).then(
	function(){
		can.Model(
			'Personajes'
		,	{	
				findAll: 'GET /personajes.json',
				findOne: 'GET /personajes/{id}.json',
				create:  'POST /personajes.json',
				update:  'PUT /personajes/{id}.json',
				destroy: 'DELETE /personajes/{id}.json' 
			}
		,	{}
		)
	}
)
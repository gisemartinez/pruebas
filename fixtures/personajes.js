steal(
	'pruebas/lib.js'
).then(
	function(){
		var jsonA=
		[	
			{
				id: 1
			,	name:'Bob'
			,	lastname:'Esponja'
			,	city:'Fondo de Bikini'
			}
		,	{
				id:2
			,	name:'Patricio'
			,	lastname:'Estrella'
			,	city:'Fondo de Bikini'
			}
		,	{
				id:3
			,	name:'Calamardo'
			,	lastname:'Platense'
			,	city:'Fondo de Bikini'
			}
		]
		can.fixture(
				'POST /personajes.json'
			,	function(original, respondWith, settings)
				{
					console.log(original)
					respondWith({ updatedAt : new Date().getTime() })
				}
			)
		can.fixture(
				'PUT /personajes.json'
			,	function(original, respondWith, settings)
				{
					console.log('llega el update')
					//respondWith({ updatedAt : new Date().getTime() })
				}
			)
		can.fixture(
				'GET /personajes.json'
			,	function(original, respondWith, settings)
				{
					console.log('llega el get')
					respondWith(200, "success", jsonA, {})
				}
			)
	}
)
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
		var usuarios=
		[
			{
				id:1
			,	username:'user1'
			,	password:'pass1'
			}
		,	{
				id:2
			,	username:'user2'
			,	password:'pass2'
			}
		,	{
				id:3
			,	username:'user3'
			,	password:'pass3'
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
		can.fixture(
				'POST /signin'
			,	function(original,respondWith)
				{
					
					var	found
					=	_.find(
							usuarios
						,	function(usuario)
							{
								
								return	_.isEqual(usuario.username,original.data.username)
									&&	_.isEqual(usuario.password,original.data.password)
							}
						)
					return	respondWith(
								found ? 200 : 404
							,	found || {msg: "No lo encontre"}
							)
				}
			)
		can.fixture(
				'POST /signup'
			,	function(original,respondWith)
				{
					return	respondWith(200,usuarios.push(original.body))
				}
			)
	}
)
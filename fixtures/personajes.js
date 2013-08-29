steal(
	'pruebas/lib.js'
).then(
	function(){
		can.fixture(
				'POST /personajes.json'
			,	function(original, respondWith, settings)
				{
					console.log(original)
					respondWith({ updatedAt : new Date().getTime() })
				}
			)
	}
)
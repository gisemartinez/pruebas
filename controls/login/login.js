steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'./login.css'
,	'pruebas/controls/navbar'
,	'pruebas/views/login.mustache'
,	'pruebas/models/personajes.js'
,	'pruebas/fixtures/personajes.js'
).then(
	function(){
		can.Control(
				'login'
			,	{
					default:
					{
						view:'pruebas/views/login.mustache'
					,	view_signup:undefined
						
					
					}
				}
			,	{	init: function(element,options)
					{
						console.log(this.options.usr_model)
						can.append(
								element
							,	can.view(options.view)
							)
					}

				,	'.btn click': function(element,ev)
					{
						
						var data_usr
						=this.options.usr_model
							.signin(
									can.deparam(
											this.element.find('form').serialize()
										)
								)

						console.log(data_usr)

					}
				}
			)

	}
)

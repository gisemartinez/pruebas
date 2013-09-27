steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'./login.css'
,	'pruebas/controls/navbar'
,	'pruebas/views/login.mustache'
,	'pruebas/models/personajes.js'
,	'pruebas/fixtures/personajes.js'
,	'pruebas/controls/navbar'
,	'pruebas/views/topbar/navbar.mustache'
).then(
	function(){
		can.Control(
				'login'
			,	{
					defaults:
					{
						view:'pruebas/views/login.mustache'
					,	view_signup:undefined
					,	onSuccess: function(data)
						{
							console.log(this,"Llegué bien, pero nadie me mando nada",data)
						} 
					,	onFaillure: function(data)
						{
							$('form').addClass('has-error')
							$('form').before('<div class="alert alert-danger">'+data+'</div>')
						}
					
					}
				}
			,	{	init: function(element,options)
					{
						//console.log(this.options.usr_model)
						can.append(
								element
							,	can.view(options.view)
							)
						console.log(options)
					}

				,	'.btn click': function(element,ev)
					{
						var self = this
					

						this.options.usr_model
							.signin(
									can.deparam(
											this.element.find('form').serialize()
										)
								).then(
									can.proxy(this.options.onSuccess,this)
								,	can.proxy(this.options.onFaillure,this)
								)
	
					}
				
				}
			)

	}
)

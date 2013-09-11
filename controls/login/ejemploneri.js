fixtures
var	usuarios
=	[
			{
				username: 'neri'
			,	password: 12345
			}
	]

can.fixture(
	'POST /signin'
,	function(original,respondWith)
	{
		var	found
		=	_.find(
				usuarios
			,	function(usuario)
				{
					return	_.isEqual(usuario.username,original.body.username)
						&&	_.isEqual(usuario.password,original.body.password)
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

unModelo
can.Model(
	'Usuarios'
,	{
		signin: function(form_data)
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
)

can.Control(
	'Login'
,	{
		defaults:
		{
			view: unaVista
		,	view_signup: otraVista
		,	user_model: unModelo
		}
	}
,	{
		init: function(element,options)
		{
			/*
				Insertamos la vista en el elemento 
				donde se instancio el controller login
			*/
			can.append(
				element
			,	can.view(
					options.view
				)
			)
		}

		/*
			Escuchamos el evento "click" sobre el 
			elemento cuya clase sea .signin
		*/
	,	'.signin click':function(el,ev)
		{
			/*
				Serializamos el formulario de Logeo 
				y lo enviamos como parametro de la
				funcion signin del modelo usuario
			*/
			this.options.user_model
					.singin(
						can.deparam(
							this.element.find('form').serialize()
						)
					)
		}

		/*
			Escuchamos el evento "click" sobre el elemento
			cuya clase sea .signup
		*/
	,	'.signup click':function(el,ev)
		{
			var	$signup_modal
			=	can.$('<div>')
			,	self
			=	this

			new Sigma.Modal(
				$signup_modal
			,	{
					view: this.options.view_signup
				,	data: options.data
				,	bindings:
					{
						'.btn-primary': function()
						{
							/*
								Serializamos el formulario de Registro
								y lo enviamos como parametro de la 
								funcion signup del modelo usuario
							*/
							self.options.user_model
									.signup(
										can.deparam(
											$signup_modal.find('form').serialize()
										)
									)		
						}
					}
				}
			)
		}
	}
)
//CORTE DE MI ANTIGUO LOGIN PARA PEGAR LA NUEVA VISTA EN CASO DE Q EL LOGUEO SEA TRUE

if(signin(this.options.usr_data))
							{	
								this.remove_children(
									$('#home')
									)
								new Sigma.Topbar(
									'body'
								,	{
										data:new can.Observe(
												{
													name:'Sodero'
												,	key:'brand'
												,	usr:
													{
														name:'User'
													,	key:'usr'
													,	options:
														[
															{
																name:'opcion6'
															,	options:
																[
																	{name:'opcion8'}
																,	{name:'opcion9'}
																]
															}
														,	
															{
																name:'opcion7'
															}
														]
													}
												,	options:
													[
														{
															name:'Administracion'
														,	key:'admin'
														}
													,	{
															name:'Dashboard'
														,	key:'dash'
														}
													,	{
															name:'Programacion'
														,	key:'prog'
														}
													,	{
															name:'Simulador'
														,	key:'simul'
														}
													,	{
															name:'Cotizacion'
														,	key:'cotiz'
														}
													]
												}
											)
									,	view:'pruebas/views/topbar/navbar.mustache'
									}	
								)
							}
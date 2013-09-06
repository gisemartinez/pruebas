steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'./login.css'
,	'pruebas/controls/navbar'
).then(
	function(){
		Sigma.Control(
				'login'
			,	{
					default:
					{
						data: undefined
					,	view: undefined
					,	usr_data: undefined
					
					}
				}
			,	{
					'.btn click': function(element,ev)
					{
						
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
						else
							{

							}
					}
				}
			)

	}
)

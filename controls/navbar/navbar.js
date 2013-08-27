steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'./util.js'
).then(
	function(){
		Sigma.Control(
				'Sigma.Topbar'
			,	{
					defaults:
					{
						view:undefined
					,	content_div: 'nav-content'
					,	content_event: 'tunning'
					}
				}
			,	{
					_render_content: function(data)
					{
						this._super(data)
						this.element.find('ul:first').addClass("nav navbar-nav")
					}

				,	generate_content: function()
					{
						if	(this.element.find('#'+this.options.content_div).length)
						{
							this.remove_children(
								this.element
											.find("#"+this.options.content_div)

								)
							/*// this.remove_children(
									this.element
											.find("#"+this.options.content_div)
												.find('.sigma-control')
													.unbind()
									this.element
											.find("#"+this.options.content_div)
												.remove()
								// )*/
						}
						can.append(
							this.element
						,	can.$('<div id="'+this.options.content_div+'">')
						)

						return	this.element.find('#'+this.options.content_div)
					}

				,	remove_children: function(elements)
					{
						if	(elements.children().length)
								this.remove_children(elements.children())
							
						else 
							{
								elements.unbind()
								elements.remove()
							}
						elements.unbind()
						elements.remove()
					}

				,	'ul li.data-admin click':function(el,ev)
					{
						this.navegate(
								el
							,	ev
							,	Sigma.Admin
							,	{
									data: 
											new can.Observe.List(
												[
													{
														id:'1'
													,	name:'Bob'
													,	lastname:'Esponja'
													,	city: 'Fondo de Bikini'
													}
												,	{
														id:'2'
													,	name:'Patricio'
													,	lastname:'Estrella'
													,	city: 'Fondo de Bikini'
													}	
												]
											)
										
								,	view: 'pruebas/views/admin/admin.mustache'
								}
							)
					}
				,	'ul li.data-dash click':function(el,ev){
						this.navegate(
								el
							,	ev
							,	Sigma.Dash
							,	{
									data: {}
								,	view: 'pruebas/views/dash/dash.mustache'
								}
							)
					}
				,	'ul li.data-prog click':function(el,ev)
					{
						this.navegate(
								el
							,	ev
							,	Sigma.Prog
							,	{
									data: {}
								,	view: 'pruebas/views/prog/prog.mustache'
								}
							)
					}
				,	'ul li.data-simul click':function(el,ev){
						this.navegate(
								el
							,	ev
							,	Sigma.Simulador
							,	{
									data: {}
								,	view: 'pruebas/views/simulador/simulador.mustache'
								}
							)
					}
				,	'ul li.data-cotiz click':function(el,ev){
						this.navegate(
								el
							,	ev
							,	Sigma.Cotizacion
							,	{
									data: {}
								,	view: 'pruebas/views/cotizacion/cotizacion.mustache'
								}
							)
					}
				,	navegate: function(li,ev,control,control_options)
					{
						/*stopPropagation() y preventDefault() son
						para evitar q todos las funciones por default 
						se disparen al producir el evento

						en este caso la clase open la asigna bootstrap
						lo q harian esas funciones son evitarlo
						*/
						if( !can.$(li).hasClass('open') ){
							new control(
								this.generate_content()
							,	control_options
							)
						}	else {
							ev.preventDefault()
							ev.stopPropagation()
							can.trigger(
								can.$('#'+this.options.content_div)
							,	this.options.content_event
							)
						}
					}

				}
			)
	}
)
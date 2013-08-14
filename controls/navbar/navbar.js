steal(
	'pruebas/lib.js'
,	'pruebas/views/navbar.mustache'
,	'pruebas/views/admin.mustache'
,	'pruebas/controls/sigma'
,	'pruebas/controls/admin'
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
							this.element
									.find("#"+this.options.content_div)
										.remove()
						
						can.append(
							this.element
						,	can.$('<div id="'+this.options.content_div+'">')
						)

						return	this.element.find('#'+this.options.content_div)
					}

				,	'ul li.data-admin click':function(el,ev)
					{
						this.navegate(
								el
							,	ev
							,	Sigma.Admin
							,	{
									data: {}
								,	view: 'pruebas/views/admin.mustache'
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
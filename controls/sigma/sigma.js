steal(
	'pruebas/lib.js'
).then(
	'pruebas/views/index/index.mustache'
,	'pruebas/views/index/error.mustache'
).then(
	function(){
		var Sigma= {}

		can.Control(
			'Sigma.Control'
		,	
			{
				defaults:
					{
						view:'pruebas/views/index/index.mustache'
					,	view_error:'pruebas/views/index/error.mustache'
					,	data:undefined
					,	msg_error: new can.Observe({text:'Ocurrio un error inesperado'})
					,	msg_empty: new	can.Observe({text:'No se envio data'})
					,	msg_loading: new can.Observe({text:'Ocurrio un error al cargar'})
					}
			}
		,	{
				init:function(elem,options){
					this.element
							.addClass('sigma-control')
					if(!options.data)
						this._render_error(options.msg_empty)
					else
						if( can.isDeferred(options.data) )
							this._render_deferred(options.data)
						else
							if(
								options.data instanceof can.Observe
								||	options.data instanceof can.Observe.List
							)
								this._render_content(options.data)
							else
								this._render_object(options.data)
				}
			,	_render_deferred:function(data){
					//this._render_loading()
					var	self
					=	this
					data
					.then(
							//	SUCCESS
							can.proxy(self._render_content,self)
							/*
							function(data)
							{
								self._render_content(data)
							}
							*/
							//	ERROR
						,	can.proxy(self._render_error,self)
							/*
							function(error)
							{
								self._render_error(error)
							}
							*/
						)
				}
			,	_render_content:function(data){
					console.log(this)
					can.append(
						this.element
					,	can.view(
							this.options.view
						,	data
						)
					)
				}
			,	_render_object:function(data){
					if	(can.isArray(data))
						this._render_content(new can.Observe.List(data))
					else
						this._render_content(new can.Observe(data))
				}
			,	_render_error:function(error){
					can.append(
							this.element
						,	can.view(
								this.options.view_error
							,	error
							)
						)
				}
			
			}	
		)
	}
)
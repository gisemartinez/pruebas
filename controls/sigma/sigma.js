steal(
	'pruebas/lib.js'
).then(
	'pruebas/views/index.mustache'
,	'pruebas/views/error.mustache'
).then(
	function(){
		var Sigma= {}

		can.Control(
			'Sigma.Control'
		,	
			{
				defaults:
					{
						view:'pruebas/views/index.mustache'
					,	view_error:'pruebas/views/error.mustache'
					,	data:undefined
					,	msg_error: new can.Observe({text:'Ocurrio un error inesperado'})
					,	msg_empty: new	can.Observe({text:'No se envio data'})
					,	msg_loading: new can.Observe({text:'Ocurrio un error al cargar'})
					}
			}
		,	{
				init:function(elem,options){
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
					data
					.then(
							//	SUCCESS
							this._render_content
							//	ERROR
						,	this._render_error
						)
				}
			,	_render_content:function(data){

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
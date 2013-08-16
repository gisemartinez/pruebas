steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'pruebas/views/admin/modal.mustache'
).then(
	function(){

		can.Control(
			'Sigma.Modal'
		,	{
				defaults:
				{
					view: 	undefined
				,	bindings: undefined
				}
			}
		,	{
				init: function(element,options)
				{
					var	$element
					=	this.element

					can.append(
						this.element
					,	can.view(
							this.options.view
						)
					)

					can.each(
						this.options.bindings
					,	function(func,selector)
						{
							can.bind.call(
								$element.find(selector)
							,	'click'
							,	func
							)
						}
					)
				}
			}
		)

		can.Control(
				'Sigma.Fila'
			,	{
					defaults:{
						view:undefined
					}
				}
			,	{
					init: function(element,options)
					{
						this.$delete_modal
						=	can.$('<div>')

						new Sigma.Modal(
							this.$delete_modal
						,	{
								view: 'pruebas/views/admin/modal.mustache'
							,	bindings:
								{
									'.btn-primary': function()
									{
										console.log("DELETE")
									}
								,	'.btn:not(.btn-primary)': function()
									{
										console.log("CANCELAR")
									}
								}
							}
						)

						// can.append(
						// 	this.$delete_modal
						// ,	can.view(
						// 		'pruebas/views/admin/modal.mustache'
						// 	)
						// )
						// METODO JQUERY
						// this.$delete_modal
						// 		.find('.btn-primary')
						// 			.bind(
						// 				'click'
						// 			,	this.delete
						// 			)

						//	METODO CAN
						// can.bind.call(
						// 	this.$delete_modal
						// 		.find('.btn-primary')
						// ,	'click'
						// ,	this.delete
						// )
					}

				,	'i.icon-remove click':function()
					{
						this.$delete_modal.modal()
						console.log("apreto el x")
					}

				,	delete: function(el,ev)
					{
						console.log("DELETE")
					}
				}
			)
	}
)
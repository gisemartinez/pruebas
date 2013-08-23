steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'pruebas/views/admin/modal.mustache'
,	'pruebas/controls/modal'
,	'pruebas/views/form/form.mustache'
).then(
	function(){

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

						this.element
								.addClass('sigma-control')

						new Sigma.Modal(
							this.$delete_modal
						,	{
								view: undefined
							,	inside_view: 'pruebas/views/form/form.mustache'
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
steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'
,	'pruebas/controls/modal'
,	'pruebas/models/personajes.js'
,	'pruebas/fixtures/personajes.js'
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
						
						this.$modal_edit
						=	can.$('<div>')
						this.$modal_delete
						=	can.$('<div>')

						new Sigma.Modal(
							this.$modal_edit
						,	{
								view: 'views/modal/modal-edit.mustache'
							
							,	data:	options.data
							,	bindings:
								{
									'.btn-primary': function()
									{
										//deberia llamar un controller q guarde esta data
										//o uno q compare y dsps guarde
										p = new Personajes(options.data._data)
										p.save()
										console.log(options.data._data)
									}
								}
							}
						)
						new Sigma.Modal(
							this.$modal_delete
						,	{
								view: 'views/modal/modal-remove.mustache'
							
							,	data:	options.data
							,	bindings:
								{
									'.btn-primary': function()
									{
										console.log("Aceptar")
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

				,	'i.icon-edit click':function()
					{
		
						this.$modal_edit.modal()
						
					}
				,	'i.icon-remove click':function()
					{
						
						this.$modal_delete.modal()
					}
				}
			)
	}
)
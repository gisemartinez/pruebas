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
						view: 	'pruebas/views/admin/modal.mustache'
					,	inside_view: undefined
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
						console.log('.modal-body')
						
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
		}
)
steal(
	'pruebas/lib.js'
,	'pruebas/controls/sigma'

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
							,	options.data
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
		}
)
steal(
	'pruebas/lib.js'
,	'pruebas/views/navbar.mustache'
,	'pruebas/controls/sigma'
).then(
	function(){
		Sigma.Control(
				'Menu'
			,	{
					defaults:{
						view:undefined
					}
				}
			,	{
					_render_content: function(data)
					{
						this.element.addClass("navbar navbar-inverse navbar-fixed-top")
						this._super(data)
						this.element.find('ul:first').addClass("nav")
		
							
						// _.each(
						// 	this.element.find('ul.menu')
						// ,	function(menu_option,index)
						// 	{
						// 		can.$(menu_option)
						// 				.addClass('nav')
						// 	}
						// )
					}
				}
			)
	}
)
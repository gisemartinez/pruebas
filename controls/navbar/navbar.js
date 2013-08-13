steal(
	'pruebas/lib.js'
,	'pruebas/views/navbar.mustache'
,	'pruebas/controls/sigma'
).then(
	function(){
		Sigma.Control(
				'Navbar'
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
						this.element.find('ul:first').addClass("nav navbar-nav")
					}
				,	'ul li.data-admin click':function()
					{
						alert('capo')
					}

				}
			)
	}
)
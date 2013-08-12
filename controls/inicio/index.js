steal(
	"pruebas/lib.js"
,	"pruebas/views/index.mustache"
).then(
	function(){
		can.Control(
				'index'
			,	{}
			,	{
					init:function(){
						var template= can.view("pruebas/views/index.mustache")
						can.$(this.element).append(template)
					}
					
				}
			)
	}
)
steal(
	"pruebas/lib.js"
,	"pruebas/views/index/index.mustache"
).then(
	function(){
		can.Control(
				'index'
			,	{}
			,	{
					init:function(){
						var template= can.view("pruebas/views/index/index.mustache")
						can.$(this.element).append(template)
					}
					
				}
			)
	}
)
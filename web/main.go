package main

import (
	_ "github.com/oikomi/PrivateCloudStorageConfig2/web/routers"
	"github.com/oikomi/PrivateCloudStorageConfig2/web/controllers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("api/v1/webconfig", &controllers.WebConfigController{})
	beego.SetStaticPath("/views", "/mh/mygo/src/github.com/oikomi/PrivateCloudStorageConfig2/web/views")
	beego.Run()
}


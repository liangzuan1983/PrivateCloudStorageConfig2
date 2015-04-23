package routers

import (
	"github.com/oikomi/PrivateCloudStorageConfig2/web/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
}

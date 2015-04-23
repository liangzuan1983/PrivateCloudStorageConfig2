package controllers

import (
	"github.com/astaxie/beego"
	"github.com/oikomi/PrivateCloudStorageConfig2/web/conf"
)

type WebConfigController struct {
	beego.Controller
}

func (this *WebConfigController) Get() {
	
}

func (this *WebConfigController) Post() {
	beego.Info("WebConfigController Post")
	action := this.GetString(conf.KEY_ACTION)
	if action == "" {
		beego.Error("[para is null] | action ")
		this.Abort("400")
		return
	}
	
	switch action {
	case conf.ACTION_LOGIN:
		name := this.Input().Get("username")
		password := this.Input().Get("password")
		beego.Info(name)
		beego.Info(password)
		mystruct := "{ 'x':'1' }"
		this.Data["json"] = &mystruct
		this.ServeJson()

	default:
		
	}
}

package controllers

import (
	"github.com/astaxie/beego"
	"github.com/oikomi/PrivateCloudStorageConfig2/web/conf"
)

type WebConfigController struct {
	beego.Controller
}

func (this *WebConfigController) Get() {
	beego.Info("WebConfigController Get")
	action := this.GetString(conf.KEY_ACTION)
	if action == "" {
		beego.Error("[para is null] | action ")
		this.Abort("400")
		return
	}
	
	ifo := NewInfoOperation()
	switch action {
	case conf.ACTION_GET_TOTAL_STATUS:
		ts, err := ifo.getTotalStatus()
		if err != nil {
			beego.Error(err)
			this.Abort("400")
			return
		}
		this.Data["json"] = ts
		this.ServeJson()
	}
}

func (this *WebConfigController) Post() {
	beego.Info("WebConfigController Post")
	action := this.GetString(conf.KEY_ACTION)
	if action == "" {
		beego.Error("[para is null] | action ")
		this.Abort("400")
		return
	}
	
}

type InfoOperation struct {

}

func NewInfoOperation() *InfoOperation {
	return &InfoOperation {
	}
}

func (this *InfoOperation)getTotalStatus()  (*TotalStatus, error) {
    ts := NewTotalStatus()
    ip, err := GetLocalIP(conf.IFI)
    if err != nil {
        beego.Error("getTotalStatus Failed")
        return nil, err
    }
    beego.Info(ip)
    ts.Ip = ip

    mac, err := GetLocalMac(conf.IFI)
    if err != nil {
        beego.Error("getTotalStatus Failed")
        return nil, err
    }
    beego.Info(mac)
    ts.Mac = mac
    dud, err := GetDiskUsage()
    if err != nil {
        beego.Error("getTotalStatus Failed")
        return nil, err
    }

    ts.AllStorage = dud.All
    ts.UsedStorage = dud.Used

    return &ts, nil
}

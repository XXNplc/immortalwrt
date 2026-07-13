include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-online-devices
PKG_VERSION:=0.1.0
PKG_RELEASE:=1

PKG_LICENSE:=Apache-2.0
PKG_MAINTAINER:=XXNplc

include $(TOPDIR)/feeds/luci/luci.mk

define Package/$(PKG_NAME)
  SECTION:=luci
  CATEGORY:=LuCI
  SUBMENU:=3. Applications
  TITLE:=LuCI support for Online Devices
  DEPENDS:=+luci-base +rpcd +ucode +iwinfo
endef

define Package/$(PKG_NAME)/description
 LuCI application for displaying online devices.
endef

LUCI_TITLE:=在线设备
LUCI_PKGARCH:=all

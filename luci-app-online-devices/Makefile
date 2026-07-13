include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-online-devices
PKG_VERSION:=0.0.1
PKG_RELEASE:=1

PKG_LICENSE:=MIT
PKG_MAINTAINER:=XXNplc

include $(INCLUDE_DIR)/package.mk

define Package/luci-app-online-devices
  SECTION:=luci
  CATEGORY:=LuCI
  SUBMENU:=3. Applications
  TITLE:=LuCI Online Devices
  DEPENDS:=+luci-base +rpcd +ucode
endef

define Package/luci-app-online-devices/description
 A modern online device monitor for LuCI.
endef

define Build/Compile
endef

define Package/luci-app-online-devices/install
	$(CP) ./root/* $(1)/
	$(CP) ./htdocs/* $(1)/
endef

$(eval $(call BuildPackage,luci-app-online-devices))

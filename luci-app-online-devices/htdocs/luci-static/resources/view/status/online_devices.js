'use strict';
'require view';

return view.extend({
	load: function () {
		return Promise.resolve();
	},

	render: function () {
		return E('div', { 'class': 'cbi-map' }, [
			E('h2', _('Online Devices')),
			E('div', { 'class': 'cbi-section' }, [
				E('p', _('luci-app-online-devices')),
				E('p', _('Plugin initialized successfully.'))
			])
		]);
	},

	handleSave: null,
	handleSaveApply: null,
	handleReset: null
});

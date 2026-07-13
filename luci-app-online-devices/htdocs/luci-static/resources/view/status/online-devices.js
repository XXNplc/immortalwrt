'use strict';
'require view';

return view.extend({
    render: function () {
        return E([
            E('h2', _('在线设备')),
            E('div', {
                'class': 'cbi-section'
            }, [
                E('p', _('开发中...'))
            ])
        ]);
    }
});

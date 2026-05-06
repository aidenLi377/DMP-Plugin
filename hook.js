// 拦截 XHR 请求，偷取接口凭证与载荷
(function() {
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    window.__STOLEN_PAYLOAD__ = null;

    XMLHttpRequest.prototype.open = function(method, url) {
        this._stolenUrl = url;
        return originalOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function(body) {
        if (this._stolenUrl && this._stolenUrl.includes('/api_2/') && 
           (/\/tag\/\d+/.test(this._stolenUrl) || /tagId=\d+/.test(this._stolenUrl) || /\/analysis\/\d+/.test(this._stolenUrl))) {
            try {
                const jsonBody = JSON.parse(body);
                // 确保载荷中包含 crowdId，证明这是画像查询
                if (jsonBody.crowdId) {
                    window.__STOLEN_PAYLOAD__ = {
                        url: this._stolenUrl,
                        payload: jsonBody
                    };
                    // 广播给 content.js
                    window.dispatchEvent(new CustomEvent('DMP_PAYLOAD_INTERCEPTED', {
                        detail: window.__STOLEN_PAYLOAD__
                    }));
                }
            } catch (e) {}
        }
        return originalSend.apply(this, arguments);
    };
})();
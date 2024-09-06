(function() {
    'use strict';

    // Orijinal WebSocket constructor'ını saklıyoruz
    const NativeWebSocket = window.WebSocket;

    // WebSocket constructor'ını override ediyoruz
    window.WebSocket = function(url, protocols) {
        const ws = new NativeWebSocket(url, protocols);

        ws.addEventListener('open', function(event) {
            console.log("WebSocket connection opened:", url);

            // Her 5 saniyede bir 10 byte'lık veri gönderme
            const interval = setInterval(function() {
                const data = new Uint8Array([0x32, 0x0e, 0x78, 0x03, 0x28, 0xa0, 0x01, 0x01, 0xce, 0x80]); // 10 byte veri
                ws.send(data);  // Veriyi WebSocket'e gönder
                console.log("10-byte data sent to WebSocket:", url);
            }, 5000);

            // Bağlantı kapandığında interval'i temizle
            ws.addEventListener('close', function() {
                clearInterval(interval);
                console.log("WebSocket connection closed:", url);
            });
        });

        ws.addEventListener('message', function(event) {
            console.log("Message received from WebSocket:", event.data);
        });

        return ws;
    };

})();

(function() {
    const NativeWebSocket = window.WebSocket;
    
    // WebSocket constructor'u override ediyoruz
    window.WebSocket = function(url, protocols) {
        const ws = new NativeWebSocket(url, protocols);

        ws.addEventListener('open', function(event) {
            console.log("WebSocket connection opened:", url);

            setInterval(function() {
                const data = new Uint8Array([0x32, 0x0e, 0x78, 0x03, 0x28, 0xa0, 0x01, 0x01, 0xce, 0x80]);
                ws.send(data);
                console.log("Data sent to WebSocket:", url);
            }, 5000);
        });

        ws.addEventListener('message', function(event) {
            console.log("Received message:", event.data);
        });

        return ws;
    };
})();

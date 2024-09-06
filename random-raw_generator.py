function generateRawData() {
    const data = new Uint8Array(10);
    data[0] = 2; 
    
    for (let i = 1; i < 10; i++) {
        data[i] = Math.floor(Math.random() * 256);
    }

    return data;
}

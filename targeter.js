async with websockets.connect(uri) as websocket:
            while True:
                data = b"2\x0ex\x03(\xa0\x01\x01\xce\x80"  # Gönderilecek 10 byte'lık veriler
                await websocket.send(data)
                print("Data sent successfully")
                # Her 5 saniyede bir bu işlemi tekrarla
                await asyncio.sleep(5)
    except Exception as e:
        print(f"WebSocket connection error: {e}")

# "Go" butonuna tıklandığında çalışacak fonksiyon
def on_go_button_click():
    target_name = target_entry.get()
    if not target_name:
        messagebox.showwarning("Warning", "Please enter a target player name.")
        return

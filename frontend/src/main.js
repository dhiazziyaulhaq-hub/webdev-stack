
const button = document.getElementById("checkApi");
const result = document.getElementById("result");

// Menguji Python REST API
button.addEventListener("click", async () => {
    result.textContent = "Menghubungi API...";

    try {
        const response = await fetch(
            "http://localhost:8000/api/hello"
        );

        const data = await response.json();

        result.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        result.textContent = "Gagal: " + error.message;
    }
});

// WebSocket
let ws;

const connectButton = document.getElementById("connectWs");
const sendButton = document.getElementById("sendMessage");
const messageInput = document.getElementById("message");
const wsResult = document.getElementById("wsResult");

connectButton.addEventListener("click", () => {
    ws = new WebSocket("ws://localhost:8001/ws");

    ws.onopen = () => {
        wsResult.textContent = "WebSocket berhasil terhubung!";
    };

    ws.onmessage = (event) => {
        wsResult.textContent += "\nServer: " + event.data;
    };

    ws.onerror = () => {
        wsResult.textContent += "\nTerjadi kesalahan WebSocket.";
    };

    ws.onclose = () => {
        wsResult.textContent += "\nKoneksi WebSocket terputus.";
    };
});

sendButton.addEventListener("click", () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(messageInput.value);
        wsResult.textContent += "\nKamu: " + messageInput.value;
        messageInput.value = "";
    } else {
        wsResult.textContent = "Hubungkan WebSocket terlebih dahulu.";
    }
});


from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timezone

app = FastAPI(title="Web Development API")

# Mengizinkan frontend mengakses API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# REST API
@app.get("/")
def home():
    return {
        "status": "success",
        "message": "Python FastAPI berhasil berjalan!"
    }

@app.get("/api/hello")
def hello():
    return {
        "message": "Halo dari Python REST API",
        "time": datetime.now(timezone.utc).isoformat()
    }

# WebSocket
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    try:
        while True:
            message = await websocket.receive_text()
            await websocket.send_text(
                f"Server menerima: {message}"
            )
    except WebSocketDisconnect:
        print("Client WebSocket terputus")

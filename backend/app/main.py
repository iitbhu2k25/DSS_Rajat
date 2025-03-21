from fastapi import FastAPI
from app.conf.settings import settings
app = FastAPI()

print("settings",settings.DB_URL)
@app.get("/")
async def root():
    return {"message": "Hello World"}
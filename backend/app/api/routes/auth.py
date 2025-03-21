from fastapi import APIRouter

router = APIRouter()

@router.get("/signin")
def signin():
    return {"message": "Welcome to my FastAPI User Authentication!"}

@router.get("/signup")
def signup():
    return {"message": "Welcome to my FastAPI User Authentication!"}
from app.conf.settings import settings
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session

DB_URL=settings.DB_URL

engine = create_engine(
    DB_URL,
    pool_pre_ping=True,
)

Session_Local = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Session = scoped_session(Session_Local)

from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped,mapped_column
from sqlalchemy import Integer,String,ForeignKey
from datetime import datetime
class Base(DeclarativeBase):
    id:Mapped[int]=mapped_column(primary_key=True)
    created_at = datetime.now()
    pass
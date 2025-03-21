from contextlib import contextmanager
from typing import Annotated
from fastapi import Depends
import logging
from .sessions import Session
from sqlalchemy.orm import Session


class Database_PG():
    def __init__(self):
        self.db_session = Session
    
    @contextmanager
    def session(self):
        self.db_session()
        try:
            yield self.db_session
        except Exception as e:
            logging.error(e)
            self.db_session.rollback()
            raise
        finally:
            self.db_session.remove()
            
    def get_session(self):
        with self.session() as sessions:
            yield sessions

db_exec = Annotated[Session, Depends(Database_PG.get_session())]

from sqlalchemy import between, select, func, desc, case

from songwriter_graph.db.model import writers, neighbors
from songwriter_graph.db.utils import sanitize_text


def get_writers(engine, name=None):
    """Retrieves writer records from writers table, based on the name 
    passed through

    Args: 
        engine: SQLAlchemy scoped session or engine
        name (str): Name to search for 

    Returns:
        TK

    Query:
        SELECT * FROM TK
    """
    if name:
        name = sanitize_text(name)
    
    writer_results = select([writers.c.writer_name, writers.c.ipi, writers.c.pro])\
        .where(writers.c.writer_name.like(name))
    
    return
import logging
import os
import sys

from server import db
from dotenv import load_dotenv
load_dotenv()

class PostManager(object):
    """Class used to manage text `Posts` on the website. Basically, any blog
    style post would fall under this category.
    """
    def __init__(self) -> None:
        super().__init__()
        return 

    def load_file(self, filename: str) -> str:
        if filename.endswith(".md"):
            with open(filename, "r") as f:
                t = f.read()
                return t
        else:
            raise ValueError("File should be of type markdown")
        
    def check_file(self, file: str) -> None:
        """Determines if file is okay to send to Postgres"""
        if len(file) < 15:
            raise ValueError(
        f"Post should be shorter than 15 characters. This post is {len(file)} chars")
        elif len(file) > 300000:
            raise ValueError(
        f"Post should be no langer than 300k characters. This post is {len(file)} chars")
        return

    def escape_text(self, post: str) -> str:
        """Escapes any text necessary before sending to postgres"""
        escaped_post = post.replace("'", "''")
        return escaped_post
    
    def send_to_posts(self, post_type: str, post: str) -> None:
        """Helper function to send markdown files to posts table"""
        sql_stmt = f"""
            INSERT INTO posts (ptype, post) 
                VALUES ('{post_type}','{post}');
            """
        result = db.session.execute(sql_stmt)
        return result

    def scan_content(self):
        """Ensures HTML content does not have any malicious code"""
        pass
    
    def load_and_post(self):
        pass

pm = PostManager()
post = pm.load_file("/Users/jonjohnson/dev/swg/swg-website/posts/About.md")
pm.check_file(post)
escaped_post = pm.escape_text(post)
result = pm.send_to_posts('about', escaped_post)
db.session.commit()
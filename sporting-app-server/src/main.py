# we will use this main.py to create an endpoint to receive information needed for postgres
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<p>Hello</p>'
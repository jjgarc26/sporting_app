# we will use this main.py to create an endpoint to receive information needed for postgres
from flask import Flask, request
from postgres.verify_user import verify_user

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<p>Hello</p>'

@app.route('/login', methods=['POST','GET'])
def login():
    if request.method == 'POST':
        # verify_user(request.form)
        return request.form
    else:
        pass
    # return 'success'


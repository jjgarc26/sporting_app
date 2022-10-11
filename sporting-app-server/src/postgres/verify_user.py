import json


def verify_user(user_information):
    user_info = json.load(user_information)
    print(user_info['username'])
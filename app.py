#! /usr/bin/env python3
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    """ Return home page template. """
    return render_template("index.html")

@app.route('/action')
def action():
    """ Return action page template. """
    return render_template("action.html")

@app.route('/about')
def about():
    """ Return about page template. """
    return render_template("about.html")

if __name__ == '__main__':
    app.run(debug=True)

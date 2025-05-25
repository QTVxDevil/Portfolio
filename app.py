from flask import Flask, render_template
import os
from config import SECRET_KEY

app = Flask(
    __name__,
    template_folder=os.path.abspath('templates'),
    static_folder=os.path.abspath('static')
)
app.secret_key = SECRET_KEY

@app.route('/')
def home():
    return render_template('base.html')

if __name__ == '__main__':
    app.run(debug=False)

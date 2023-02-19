from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def Home():
    return render_template('Home.html')

@app.route('/tour')
def Tour():
    return render_template('Tour.html')

@app.route('/about')
def About():
    return render_template('About.html')

@app.route('/contact')
def Contact():
    return render_template('Contact.html')


if __name__ == "__main__":
    app.run(debug=True)
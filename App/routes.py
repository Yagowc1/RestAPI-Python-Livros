from flask import render_template, jsonify
from App import app
import json
@app.get('/')
def lading_page():
    return render_template('index.html')

@app.route('/dados')
def obter_dados():
    with open('App/Dados/livros.json', 'r') as arquivo_json:
        dados = json.load(arquivo_json)
    return jsonify(dados)
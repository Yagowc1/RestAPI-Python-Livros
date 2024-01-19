from flask import render_template
from App import app
@app.get('/')
def buscar_livros():
    return "Está funcionando melhor do que esperado"
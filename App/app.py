from flask import Flask

server = Flask(__name__)

@server.get('/')
def buscar_livros():
    return "Está funcionando melhor do que esperado"

server.run()
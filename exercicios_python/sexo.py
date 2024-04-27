#3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
sexo = input("Digite o sexo: ")
sexo = sexo.upper()
if sexo=='F'or sexo=='M':
    print("Sexo Válido",sexo)
else:
    print("Sexo inválido",sexo)    
#Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
letra = input("Digite um letra: ")
letra = letra.lower()
if letra in "aeiou": # aqui testa com o operador in
    print("É uma vogal")
else:
   print("Não é uma vogal") 
# Back-end Node.JS com SQL [23E2_3] - Trabalho final

---

Listar usuários através de GET: http://localhost:3333/users

---   

Login - POST: http://localhost:3333/login
{
  "username": "Aga",
  "password": "aga123"
}

---

Criar usuário - POST: http://localhost:3333/users
{
  "username": "Aga",
  "password": "aga123",
  "name": "Aga Silva",
  "email": "aga88@gmail.com",
  "age": 29,
  "phoneNumber": "49988055555"
}

---

Novo curso - POST: 
{
  "name": "Curso de NodeJS + SQL",
  "isAvailable": true
}


---

Listar cursos - GET: http://localhost:3333/courses

---

Listar inscrições - GET: 
http://localhost:3333/subscription

----

Nova inscrição - POST: 
http://localhost:3333/subscription

---

Deletar inscrição - DELETE: http://localhost:3333/subscription
{
  "id": 1
}




#  Projeto: CRUD de Alunos com Supabase

Este projeto demonstra como realizar operações básicas de CRUD (Create, Read, Update, Delete) utilizando JavaScript com `async/await` e integração com a API REST do Supabase.

---

## Tecnologias utilizadas

- JavaScript
- Fetch API
- Supabase (API REST)

---

##  Configuração

Antes de executar o projeto, configure suas credenciais do Supabase:

```javascript

const SUPABASE_URL = 'SUA_URL_AQUI';
const SUPABASE_KEY = 'SUA_CHAVE_AQUI';

const URL = `${SUPABASE_URL}/rest/v1/alunos`;

const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

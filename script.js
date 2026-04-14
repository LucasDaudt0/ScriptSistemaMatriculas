const SUPABASE_URL = 'SUA_URL_AQUI';
const SUPABASE_KEY = 'SUA_CHAVE_AQUI';

const URL = `${SUPABASE_URL}/rest/v1/alunos`;

const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

async function listarAlunos() {
    try {
        const res = await fetch(`${URL}?select=*`, { headers: HEADERS });
        const data = await res.json();
        console.log("Lista de Alunos:", data);
    } catch (err) {
        console.error('Não foi possível listar os alunos:', err);
    }

}

async function adicionarCadastro(nome, email) {
    try {
        const res = await fetch(URL, {
            method: 'POST',
            headers: { ...HEADERS, 'Prefer': 'return=representation' },
            body: JSON.stringify({
                nome: nome,
                email: email
            })
        });
        const data = await res.json();
        console.log("Cadastro realizado:", data);
    } catch (err) {
        console.error("Não fo possível criar o cadastro:", err);
    }
}

async function modificarCadastro(id, nome, email) {
    try {
        const res = await fetch(`${URL}?id=eq.${id}`, {
            method: 'PATCH',
            headers: { ...HEADERS, 'Prefer': 'return=represetation' },
            body: JSON.stringify({
                nome: nome,
                email: email,
            })
        })

        const data = await res.json();
        console.log("Cadastro atualizado:", data);

    } catch (err) {
        console.error("Não foi possível alterar o cadastro:", err);
    }
}

async function removerCadastro(id) {
    try {
        const res = await fetch(`${URL}?id=eq.${id}`, {
            method: 'DELETE',
            headers: { ...HEADERS, 'Prefer': 'return=representation' }
        });
        const data = await res.json();
        console.log("Cadastro removido:", data);
    } catch (err) {
        console.error("Não foi possível remover o cadastro:", err);
    }
}

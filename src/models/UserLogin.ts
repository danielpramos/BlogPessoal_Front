// interface UserLogin{
//     id: number;
//     usuario: string;
//     senha: string
//     token?: string | null;
// }

// export default UserLogin;

// Altere a Model conforme a Model do Back
interface UserLogin{
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string
    token: string   // Mudamos o parametro do Token para aceitar somente String
}

export default UserLogin
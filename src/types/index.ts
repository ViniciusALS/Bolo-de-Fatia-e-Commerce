export interface Usuario {
	id?: string;
	created_at?: string;
	nome?: string;
	sobrenome?: string;
	telefone?: string;
	email?: string;
	senha?: string;
}

export interface Produto {
	id?: string;
	created_at?: string;
	nome?: string;
	descricao?: string;
	preco?: number;
	imagem_uri?: string;
	favorito?: boolean;
}

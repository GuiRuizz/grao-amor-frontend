export interface Produto {
    id: number;
    nome: string;
    imagem: string;
    preco: number;
    destaque?: string;
    estrelas: number;
    avaliacao: number;
}

export interface ProdutosGridProps {
    produtos: Produto[];
}
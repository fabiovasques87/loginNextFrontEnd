

type Usuario = {
  id: number;
  username: string;
  userFuncao: { 
    funcao: {
       id: number;
       nome: string ;
      }
     }[];
};
  

export interface FormData {
  codigo: string;
  produto: string;
  descricao: string;
  fornecedor: string;
  unEstoque: string;
  precoCustoVenda: number;
  limite: number;
}
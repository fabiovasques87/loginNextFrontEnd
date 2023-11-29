import apiUrl from '@/apiConfig';




  //Funçã para consumir a API de update do usuário

  export const updateUser = async (userId: number, funcaoId: number) => {
    try {
      const response = await fetch(`${apiUrl}/users/atualizar-usuario/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ funcaoId }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data; // Retorne os dados se necessário
      } else {
        console.error('Erro ao atualizar usuário:', response.statusText);
        throw new Error('Erro ao atualizar usuário!');
      }
    } catch (error) {
      console.error('Erro na requisição de atualização:', error);
      throw error;
    }
  };


  export const fetchUsers = async () => {
    try {
      const response = await fetch(`${apiUrl}/users/users`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Erro ao obter usuários', response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Erro ao obter usuários', error);
      return null;
    }
  };


  export const cadastrarUsuario = async ( username: string, password: string,funcaoId: string) => {
    try {
      const response = await fetch(`${apiUrl}/users/cadastro`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, funcaoId }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, user: data.user };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.error };
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário', error);
      return { success: false, error: 'Erro ao cadastrar usuário' };
    }
  };
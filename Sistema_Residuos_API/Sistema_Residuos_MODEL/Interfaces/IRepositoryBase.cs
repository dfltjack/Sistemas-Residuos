using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Interfaces
{
    public interface IRepositoryBase<T> where T : class
    {
        //Métodos síncronos
        T Incluir(T obj);
        T Alterar(T obj);
        T SelecionarChave(params object[] variavel);
        List<T> SelecionarTodos();
        void Excluir(T obj);
        // void Excluir(params object[] variavel);


        //Métodos assíncronos
        Task<T> IncluirAsync(T obj);
        Task<T> AlterarAsync(T obj);
        Task<T> SelecionarChaveAsync(params object[] variavel);
        Task ExcluirAsync(params object[] variavel);
        Task ExcluirAsync(T obj);
        Task<List<T>> SelecionarTodosAsync();
    }
}

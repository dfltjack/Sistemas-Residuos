using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Repositories;
using Sistema_Residuos_MODEL.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Services
{
    public class ServiceTipoEstabelecimento
    {
        public Sistema_ResiduosContext _context;
        public RepositoryTipoEstabelecimento oRepositoryTipoEstabelecimento { get; set; }

        public ServiceTipoEstabelecimento(Sistema_ResiduosContext context)
        {
           _context = context;
           oRepositoryTipoEstabelecimento = new RepositoryTipoEstabelecimento(context);
        }

        public async Task<TipoEstabelecimentoVM> IncluirTipoEstabelecimentoAsync(TipoEstabelecimentoVM tipoEstabelecimentoVM)
        {
            try
            {
                var tipoEstabelecimento = new TiposEstabelecimento()
                {
                    TipoEstabelecimentoId = tipoEstabelecimentoVM.TipoEstabelecimentoId,
                    ResidenciasEstabelecimentos = tipoEstabelecimentoVM.ResidenciasEstabelecimentos,
                };

                await oRepositoryTipoEstabelecimento.IncluirAsync(tipoEstabelecimento);

                return tipoEstabelecimentoVM;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<TipoEstabelecimentoVM> AlterarTipoEstabelecimentoAsync(TipoEstabelecimentoVM tipoEstabelecimentoVM)
        {
            var tipoEstabelecimento = new TiposEstabelecimento()
            {
                TipoEstabelecimentoId = tipoEstabelecimentoVM.TipoEstabelecimentoId,
                ResidenciasEstabelecimentos = tipoEstabelecimentoVM.ResidenciasEstabelecimentos,
            };

            await oRepositoryTipoEstabelecimento.AlterarAsync(tipoEstabelecimento);

            return tipoEstabelecimentoVM;
        }
    }
}

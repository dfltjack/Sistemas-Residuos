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
    public class ServiceResidencia
    {
        public Sistema_ResiduosContext _context;
        public RepositoryResidencia oRepositoryResidencia { get; set; }

        public ServiceResidencia(Sistema_ResiduosContext context)
        {
            _context = context;
            oRepositoryResidencia = new RepositoryResidencia(context);
        }

        public async Task<ResidenciaEstabelecimentoVM> IncluirResidenciaAsync(ResidenciaEstabelecimentoVM residenciasEstabelecimentoVM)
        {
            try
            {
                var residenciasEstabelecimento = new ResidenciasEstabelecimento()
                {
                    ResidenciaEstabelecimentoId = residenciasEstabelecimentoVM.ResidenciaEstabelecimentoId,
                    TipoEstabelecimentoId = residenciasEstabelecimentoVM.TipoEstabelecimentoId,
                    NomeResidencia = residenciasEstabelecimentoVM.NomeResidencia,                  
                };

                await oRepositoryResidencia.IncluirAsync(residenciasEstabelecimento);

                return residenciasEstabelecimentoVM;

            }
            catch (Exception ex)
            {

                throw;
            }

        }

        public async Task<ResidenciaEstabelecimentoVM> AlterarResidenciaAsync(ResidenciaEstabelecimentoVM residenciasEstabelecimentoVM)
        {
            var residenciasEstabelecimento = new ResidenciasEstabelecimento()
            {
                ResidenciaEstabelecimentoId = residenciasEstabelecimentoVM.ResidenciaEstabelecimentoId,
                TipoEstabelecimentoId = residenciasEstabelecimentoVM.TipoEstabelecimentoId,
                NomeResidencia = residenciasEstabelecimentoVM.NomeResidencia,
            };

            await oRepositoryResidencia.AlterarAsync(residenciasEstabelecimento);

            return residenciasEstabelecimentoVM;
        }

    }
}

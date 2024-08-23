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
    public class ServiceTipoResiduo
    {
        public Sistema_ResiduosContext _context;
        public RepositoryTipoResiduo oRepositoryTipoResiduo { get; set; }

        public ServiceTipoResiduo(Sistema_ResiduosContext context)
        {
            _context = context;
            oRepositoryTipoResiduo = new RepositoryTipoResiduo(context);
        }

        public async Task<TipoResiduoVM> IncluirTipoResiduoAsync(TipoResiduoVM tipoResiduoVM)
        {
            try
            {
                var tipoResiduo = new TiposResiduo(){
                    TipoResiduoId = tipoResiduoVM.TipoResiduoId,
                    CalendarioColeta = tipoResiduoVM.CalendarioColeta,
                    PontosColeta = tipoResiduoVM.PontosColeta,
                };

                await oRepositoryTipoResiduo.IncluirAsync(tipoResiduo);

                return tipoResiduoVM;
            }
            catch (Exception ex)
            {

               throw;
            }
        }

        public async Task<TipoResiduoVM> AlterarTipoResiduoAsync(TipoResiduoVM tipoResiduoVM)
        {
            var tipoResiduo = new TiposResiduo()
            {
                TipoResiduoId = tipoResiduoVM.TipoResiduoId,
                CalendarioColeta = tipoResiduoVM.CalendarioColeta,
                PontosColeta = tipoResiduoVM.PontosColeta,
            };

            await oRepositoryTipoResiduo.AlterarAsync(tipoResiduo);

            return tipoResiduoVM;
        }

    }
}

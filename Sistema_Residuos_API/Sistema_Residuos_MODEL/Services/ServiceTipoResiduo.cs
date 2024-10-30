using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Repositories;
using Sistema_Residuos_MODEL.ViewModel;
using System;
using System.Collections.Generic;
using System.IO; // Certifique-se de ter esta diretiva
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http; // Certifique-se de ter esta diretiva

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
                var tipoResiduo = new TiposResiduo()
                {
                    TipoResiduoId = tipoResiduoVM.TipoResiduoId,
                    Resíduo = tipoResiduoVM.Resíduo,
                    FotoResiduo = tipoResiduoVM.FotoResiduo // Agora, isso deve ser uma URL
                };

                await oRepositoryTipoResiduo.IncluirAsync(tipoResiduo);

                return tipoResiduoVM;
            }
            catch (Exception ex)
            {
                throw; // Considere registrar o erro ou lidar com ele de forma adequada
            }
        }


        public async Task<TipoResiduoVM> AlterarTipoResiduoAsync(TipoResiduoVM tipoResiduoVM)
        {
            var tipoResiduo = new TiposResiduo()
            {
                TipoResiduoId = tipoResiduoVM.TipoResiduoId,
                Resíduo = tipoResiduoVM.Resíduo,
                FotoResiduo = tipoResiduoVM.FotoResiduo // Aqui você converte IFormFile para byte[]
            };

            await oRepositoryTipoResiduo.AlterarAsync(tipoResiduo);
            return tipoResiduoVM;
        }

        private async Task<byte[]> ConvertToByteArrayAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return null;

            using (var ms = new MemoryStream())
            {
                await file.CopyToAsync(ms);
                return ms.ToArray();
            }
        }
    }
}

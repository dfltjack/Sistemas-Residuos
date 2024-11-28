using Microsoft.EntityFrameworkCore;
using Sistema_Residuos_MODEL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.ViewModel
{
    public class TipoEstabelecimentoVM
    {
        [Key]
        [Display(Name = "Código do Tipo de Estabelecimento")]
        public int TipoEstabelecimentoId { get; set; }
        [Display(Name = "Estabelecimento / Residência")]
        public virtual ICollection<ResidenciasEstabelecimento> ResidenciasEstabelecimentos { get; set; } = new List<ResidenciasEstabelecimento>();

        public TipoEstabelecimentoVM()
        {

        }

        public async static Task<List<TipoEstabelecimentoVM>> GetTipoEstabelecimentoVMsAsync()
        {

            List<TipoEstabelecimentoVM> tipoEstabelecimentoVMs = new List<TipoEstabelecimentoVM>();

            var db = new Sistema_ResiduosContext();
            return await (from tipo in db.TiposEstabelecimentos
                          select new TipoEstabelecimentoVM
                          {
                              TipoEstabelecimentoId = tipo.TipoEstabelecimentoId,
                              ResidenciasEstabelecimentos = tipo.ResidenciasEstabelecimentos

                          }).ToListAsync();

        }
    }
}

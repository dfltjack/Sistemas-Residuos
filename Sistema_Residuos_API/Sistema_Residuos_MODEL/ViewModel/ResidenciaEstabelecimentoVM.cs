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
    public class ResidenciaEstabelecimentoVM
    {
        [Key]
        [Display(Name = "Código da Residência/Estabelecimento")]
        public int ResidenciaEstabelecimentoId { get; set; }

        [Display(Name = "Tipo de Estabelecimento")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "O Tamanho não pode ser menor que 5")]
        public int TipoEstabelecimentoId { get; set; }

        public string? NomeResidencia { get; set; }

        //public virtual ICollection<Notificaco> Notificacos { get; set; } = new List<Notificaco>();

        //public virtual TiposEstabelecimento TipoEstabelecimento { get; set; }

        public ResidenciaEstabelecimentoVM()
        {

        }

        public async static Task<List<ResidenciaEstabelecimentoVM>> GetResidenciaEstabelecimentoVMsAsync()
        {

           List<ResidenciaEstabelecimentoVM> residenciaEstabelecimentoVMs = new List<ResidenciaEstabelecimentoVM>();

            var db = new Sistema_ResiduosContext();
            return await (from res in db.ResidenciasEstabelecimentos
                          select new ResidenciaEstabelecimentoVM
                          {
                              ResidenciaEstabelecimentoId = res.ResidenciaEstabelecimentoId,
                              TipoEstabelecimentoId = res.TipoEstabelecimentoId,
                              NomeResidencia = res.NomeResidencia

                          }).ToListAsync();            
                
        }
    }
}

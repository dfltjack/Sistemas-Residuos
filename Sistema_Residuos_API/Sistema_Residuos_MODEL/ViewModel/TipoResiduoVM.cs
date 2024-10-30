using Microsoft.AspNetCore.Http;
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
    public class TipoResiduoVM
    {
        [Key]
        [Display(Name = "Código do Tipo de Resíduo")]
        public int TipoResiduoId { get; set; }

        [Display(Name = "Resíduos")]
        public string Resíduo { get; set; }

        [Display(Name = "Foto")]
        public string FotoResiduo { get; set; } // Alterado para string, para armazenar URL

        // [Display(Name = "Calendário de Coleta")]
        // public virtual ICollection<CalendarioColetum> CalendarioColeta { get; set; } = new List<CalendarioColetum>();

        // [Display(Name = "Pontos de Coleta")]
        // public virtual ICollection<PontosColetum> PontosColeta { get; set; } = new List<PontosColetum();

        public TipoResiduoVM() { }

        public async static Task<List<TipoResiduoVM>> GetTipoResiduoVMsAsync()
        {
            using (var db = new Sistema_ResiduosContext())
            {
                return await (from tip in db.TiposResiduos
                              select new TipoResiduoVM
                              {
                                  TipoResiduoId = tip.TipoResiduoId,
                                  Resíduo = tip.Resíduo,
                                  FotoResiduo = tip.FotoResiduo, // Agora é uma URL
                                  // CalendarioColeta = tip.CalendarioColeta,
                                  // PontosColeta = tip.PontosColeta
                              }).ToListAsync();
            }
        }
    }
}

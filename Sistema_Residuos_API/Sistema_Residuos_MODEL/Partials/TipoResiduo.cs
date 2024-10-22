using Sistema_Residuos_MODEL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Partials
{
    [MetadataType(typeof(MD_TipoResiduo))]
    public partial class TipoResiduo
    {
        public class MD_TipoResiduo
        {
            [Display(Name = "Código do Tipo de Resíduo")]
            public int? TipoResiduoId { get; set; }
            [Display(Name = "Calendário de Coleta")] 
            public virtual ICollection<CalendarioColetum> CalendarioColeta { get; set; } = new List<CalendarioColetum>();
            [Display(Name = "Pontos de Coleta")]
            public virtual ICollection<PontosColetum> PontosColeta { get; set; } = new List<PontosColetum>();
        }        
    }
}

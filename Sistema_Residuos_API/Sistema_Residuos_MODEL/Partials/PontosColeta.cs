using Sistema_Residuos_MODEL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Partials
{
    [MetadataType(typeof(MD_PontosColeta))]
    public partial class PontosColeta
    {
        public class MD_PontosColeta
        {
            [Display(Name = "Código do Ponto de Coleta")]
            public int PontoColetaId { get; set; }
            [Display(Name = "Latitude")]
            public decimal Latitude { get; set; }
            [Display(Name = "Longitude")]
            public decimal Longitude { get; set; }
            [Display(Name = "Código do Tipo de Resíduo")]
            public int TipoResiduoId { get; set; }
            [Display(Name = "Tipo de Resíduo")]
            public virtual TiposResiduo? TipoResiduo { get; set; }
        }
    }
}

using Sistema_Residuos_MODEL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Sistema_Residuos_MODEL.Partials
{
    [MetadataType(typeof(MD_CalendarioColetum))]
    public partial class CalendarioColetum
    {
        public class MD_CalendarioColetum
        {
            [Display(Name = "Código do Calendário de Coleta")]
            public int CalendarioColetaId { get; set; }
            [Display(Name = "Código do Tipo de Resíduo")]
            public int TipoResiduoId { get; set; }
            [Display(Name = "Horários de Coleta")]
            public TimeOnly Horario { get; set; }
            [Display(Name = "Dias Semanais de Coleta")]
            public string? DiaSemana { get; set; }
            [Display(Name = " Tipos de Resíduo")]
            public virtual TiposResiduo? TipoResiduo { get; set; }
        }        
    }
}

using Sistema_Residuos_MODEL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Partials
{
    [MetadataType(typeof(MD_ResidenciasEstabelecimento))]
    public partial class ResidenciasEstabelecimento
    {
        public class MD_ResidenciasEstabelecimento
        {
            [Display(Name = "Código da Residência/Estabelecimento")]
            public int ResidenciaEstabelecimentoId { get; set; }
            [Display(Name = "Tipo de Estabelecimento")]
            public int TipoEstabelecimentoId { get; set; }
            [Display(Name = "Nome da Residência")]
            public string? NomeResidencia { get; set; }
            [Display(Name = "Notificações")]
            public virtual ICollection<Notificaco> Notificacos { get; set; } = new List<Notificaco>();
            [Display(Name = "Tipo de Estabelecimento")]
            public virtual TiposEstabelecimento? TipoEstabelecimento { get; set; }
        }
    }
}

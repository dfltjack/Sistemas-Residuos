using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Partials
{
    [MetadataType(typeof(MD_TipoEstabelecimento))]
    public partial class TipoEstabelecimento
    {
        public class MD_TipoEstabelecimento
        {

           [Display(Name = "Código do Tipo de Estabelecimento")]
            public int TipoEstabelecimentoId { get; set; }
            [Display(Name = "Residência / Estabelecimento")]
            public virtual ICollection<ResidenciasEstabelecimento> ResidenciasEstabelecimentos { get; set; } = new List<ResidenciasEstabelecimento>();
        }        
    }
}

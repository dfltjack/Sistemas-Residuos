using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Partials
{
    [MetadataType(typeof(MD_Notificacao))]
    public partial class Notificacao
    {
        public class MD_Notificacao
        {
            [Display(Name = "Código da Notificação")]
            public int NotificacaoId { get; set; }
            [Display(Name = "Mensagem")]
            public string? Mensagem { get; set; }
            [Display(Name = "Data de Envio")]
            public DateTime DataEnvio { get; set; }
            [Display(Name = "Código do Estabelecimento")]
            public int ResidenciaEstabelecimentoId { get; set; }
            [Display(Name = "Estabelecimento")]
            public virtual ResidenciasEstabelecimento? ResidenciaEstabelecimento { get; set; }
        }
    }        
}

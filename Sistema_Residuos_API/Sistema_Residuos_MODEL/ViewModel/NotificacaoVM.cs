using Sistema_Residuos_MODEL.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.ViewModel
{
    public class NotificacaoVM
    {
        [Key]
        [Display(Name = "Código da Notificação")]
        public int NotificacaoId { get; set; }

        [Display(Name = "Mensagem")]
        public string Mensagem { get; set; }

        public DateTime DataEnvio { get; set; }

        public int ResidenciaEstabelecimentoId { get; set; }

        public virtual ResidenciasEstabelecimento ResidenciaEstabelecimento { get; set; }

        public NotificacaoVM()
        {

        }

        public async static Task<List<NotificacaoVM>> GetNotificacaoVMsAsync()
        {

            List<NotificacaoVM> notificacaoVMs = new List<NotificacaoVM>();

            var db = new Sistema_ResiduosContext();
            return await (from not in db.Notificacoes
                          select new NotificacaoVM
                          {
                              NotificacaoId = not.NotificacaoId,
                              Mensagem = not.Mensagem,
                              DataEnvio = not.DataEnvio,
                              ResidenciaEstabelecimentoId = not.ResidenciaEstabelecimentoId

                          }).ToListAsync();

        }
    }
}

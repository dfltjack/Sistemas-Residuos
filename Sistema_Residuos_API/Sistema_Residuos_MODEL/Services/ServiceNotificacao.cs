using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Repositories;
using Sistema_Residuos_MODEL.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Services
{
    public class ServiceNotificacao
    {
        public Sistema_ResiduosContext _context;
        public RepositoryNotificacao oRepositoryNotificacao;

        public ServiceNotificacao(Sistema_ResiduosContext context)
        {
            _context = context;
            oRepositoryNotificacao = new RepositoryNotificacao(context);
        }

        public async Task<NotificacaoVM> IncluirNotificacaoAsync(NotificacaoVM notificacaoVM)
        {
            try
            {
                var notificacao = new Notificaco()
                {
                    NotificacaoId = notificacaoVM.NotificacaoId,
                    Mensagem = notificacaoVM.Mensagem,
                    DataEnvio = notificacaoVM.DataEnvio,
                    ResidenciaEstabelecimentoId = notificacaoVM.ResidenciaEstabelecimentoId
                };

                await oRepositoryNotificacao.IncluirAsync(notificacao);
                return notificacaoVM;

            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public async Task<NotificacaoVM> AlterarNotificacaoAsync(NotificacaoVM notificacaoVM)
        {
            var notificacao = new Notificaco()
            {
                NotificacaoId = notificacaoVM.NotificacaoId,
                Mensagem = notificacaoVM.Mensagem,
                DataEnvio = notificacaoVM.DataEnvio,
                ResidenciaEstabelecimentoId = notificacaoVM.ResidenciaEstabelecimentoId
            };

            await oRepositoryNotificacao.AlterarAsync(notificacao);
            return notificacaoVM;
        }

    }
}

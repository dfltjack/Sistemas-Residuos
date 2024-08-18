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
    public class ServiceCalendario
    {
        public Sistema_ResiduosContext _context;
        public RepositoryCalendario oRepositoryCalendario { get; set; }

        public ServiceCalendario(Sistema_ResiduosContext context)
        {
            _context = context;
            oRepositoryCalendario = new RepositoryCalendario(context);
        }

        public async Task<CalendarioVM> IncluirCalendarioAsync(CalendarioVM calendarioVM)
        {
            try
            {
                var calendario = new CalendarioColetum()
                {
                    CalendarioColetaId = calendarioVM.CalendarioColetaId,
                    TipoResiduoId = calendarioVM.TipoResiduoId,
                    Horario = calendarioVM.Horario,
                    DiaSemana = calendarioVM.DiaSemana
                };


                await oRepositoryCalendario.IncluirAsync(calendario);
                return calendarioVM;
            }
            catch (Exception ex)
            {

                throw;
            }

        }
        
    }
}

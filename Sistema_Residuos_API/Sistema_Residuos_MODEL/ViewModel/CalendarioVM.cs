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
    public class CalendarioVM
    {
        [Key]
        [Display(Name = "Código do Calendário")]
        public int CalendarioColetaId { get; set; }

        [Display(Name = "Tipo de Resíduo")]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "O Tamanho não pode ser menor que 5")]
        public int TipoResiduoId { get; set; }

        public TimeOnly Horario { get; set; }

        public string DiaSemana { get; set; }

        //public virtual TiposResiduo TipoResiduo { get; set; }

        public CalendarioVM()
        {

        }

        public async static Task<List<CalendarioVM>> GetCalendarioVMsAsync()
        {

            List<CalendarioVM> calendarioVMs = new List<CalendarioVM>();

            var db = new Sistema_ResiduosContext();
            return await (from cal in db.CalendarioColeta
                          select new CalendarioVM
                          {
                              CalendarioColetaId = cal.CalendarioColetaId,
                              TipoResiduoId = cal.TipoResiduoId,
                              Horario = cal.Horario,
                              DiaSemana = cal.DiaSemana

                          }).ToListAsync();

        }
    }

    
}

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
    public class PontoColetaVM
    {
        [Key]
        [Display(Name = "Código do Ponto de Coleta")]
        public int PontoColetaId { get; set; }
        [Display(Name = "Latitude")]
        public string Latitude { get; set; }
        [Display(Name = "Longitude")]
        public string Longitude { get; set; }

        public int? TipoResiduoId { get; set; }

        //public virtual TiposResiduo TipoResiduo { get; set; }

        public PontoColetaVM()
        {

        }

        public async static Task<List<PontoColetaVM>> GetPontoColetaVMsAsync()
        {

            List<PontoColetaVM> pontoColetaVMs = new List<PontoColetaVM>();

            var db = new Sistema_ResiduosContext();
            return await (from ponto in db.PontosColeta
                          select new PontoColetaVM
                          {
                              PontoColetaId = ponto.PontoColetaId,
                              Latitude = ponto.Latitude,
                              Longitude = ponto.Longitude,
                              //TipoResiduoId = ponto.TipoResiduoId

                          }).ToListAsync();

        }
    }
}

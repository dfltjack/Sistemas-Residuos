using Microsoft.AspNetCore.Mvc;
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
    public class ServicePontosColeta
    {
        public Sistema_ResiduosContext _context;
        public RepositoryPontosColeta _oRepositoryPontosColeta;

        public ServicePontosColeta(Sistema_ResiduosContext context)
        {
            _context = context;
            _oRepositoryPontosColeta = new RepositoryPontosColeta(context);
        }

        public async Task<PontoColetaVM> IncluirPontosColetaAsync(PontoColetaVM pontoColetaVM)
        {

           try
            {
                var pontoColeta = new PontosColetum()
                {
                    PontoColetaId = pontoColetaVM.PontoColetaId,                   
                    Latitude = pontoColetaVM.Latitude,
                    Longitude = pontoColetaVM.Longitude,
                    //TipoResiduoId = pontoColetaVM.TipoResiduoId
                };

                await _oRepositoryPontosColeta.IncluirAsync(pontoColeta);

                return pontoColetaVM;

            }
            catch (Exception ex)
            {

                throw;
            }

        }

        public async Task<PontoColetaVM> AlterarPontosColetaAsync(PontoColetaVM pontoColetaVM)
        {
            var pontoColeta = new PontosColetum()
            {
                PontoColetaId = pontoColetaVM.PontoColetaId,
                Latitude = pontoColetaVM.Latitude,
                Longitude = pontoColetaVM.Longitude,
                //TipoResiduoId = pontoColetaVM.TipoResiduoId
            };

            await _oRepositoryPontosColeta.AlterarAsync(pontoColeta);

            return pontoColetaVM;
        }
    }
}

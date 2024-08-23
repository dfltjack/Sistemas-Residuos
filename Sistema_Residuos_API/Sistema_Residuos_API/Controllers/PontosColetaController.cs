using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.ViewModel;

namespace Sistema_Residuos_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PontosColetaController : Controller
    {
        private Sistema_ResiduosContext _context;
        private ServicePontosColeta _service;

        public PontosColetaController(Sistema_ResiduosContext context, ServicePontosColeta service)
        {
            _context = context;
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _service._oRepositoryPontosColeta.SelecionarTodosAsync());
        }

        [HttpGet("GetPontosColetaById/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _service._oRepositoryPontosColeta.SelecionarChaveAsync(id));
        }

        [HttpPost("PostPontosColeta")]
        public async Task<IActionResult> Post(PontoColetaVM pontosColetaVM)
        {
            await _service.IncluirPontosColetaAsync(pontosColetaVM);
            return Ok("Ponto de Coleta Cadastrado com Sucesso");
        }

        [HttpPut("PutPontosColeta")]
        public async Task<IActionResult> Put(PontoColetaVM pontosColetaVM)
        {
            await _service.AlterarPontosColetaAsync(pontosColetaVM);
            return Ok("Ponto de Coleta Alterado com Sucesso");
        }

        [HttpDelete("DeletePontosColeta/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service._oRepositoryPontosColeta.ExcluirAsync(id);
                return Ok("Ponto de Coleta Excluido(a) com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

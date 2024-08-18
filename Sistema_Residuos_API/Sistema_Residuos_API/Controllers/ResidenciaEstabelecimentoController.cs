using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.ViewModel;

namespace Sistema_Residuos_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResidenciaEstabelecimentoController : ControllerBase
    {
        private Sistema_ResiduosContext _context;
        private ServiceResidencia _service;

        public ResidenciaEstabelecimentoController(Sistema_ResiduosContext context, ServiceResidencia service)
        {
            _context = context;
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _service.oRepositoryResidencia.SelecionarTodosAsync());
        }

        [HttpGet("GetResidenciaById/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _service.oRepositoryResidencia.SelecionarChaveAsync(id));
        }

        [HttpPost("PostResidencias")]
        public async Task<IActionResult> Post(ResidenciaEstabelecimentoVM residenciasEstabelecimentoVM)
        {
            await _service.IncluirResidenciaAsync(residenciasEstabelecimentoVM);
            return Ok("Residência/Estabelecimento Cadastrado(a) com sucesso");
        }

        [HttpPut("PutResidencias")]
        public async Task<IActionResult> Put(ResidenciaEstabelecimentoVM residenciasEstabelecimentoVM)
        {
            await _service.AlterarResidenciaAsync(residenciasEstabelecimentoVM);
            return Ok("Residência/Estabelecimento Cadastrado(a) com sucesso");
        }

        [HttpDelete("DeleteResidencia/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.oRepositoryResidencia.ExcluirAsync(id);

                return Ok("Residência/Estabelecimento Excluido(a) com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Repositories;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.ViewModel;

namespace Sistema_Residuos_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoEstabelecimentoController : Controller
    {
        private Sistema_ResiduosContext _context;
        private ServiceTipoEstabelecimento _service;

        public TipoEstabelecimentoController(Sistema_ResiduosContext context, ServiceTipoEstabelecimento service)
        {
            _context = context;
            _service = service;
        }

        [HttpGet]
        public  async Task<IActionResult> Get()
        {
            return Ok(await _service.oRepositoryTipoEstabelecimento.SelecionarTodosAsync());
        }

        [HttpGet("GetTipoEstabelecimentoById/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _service.oRepositoryTipoEstabelecimento.SelecionarChaveAsync(id));
        }

        [HttpPost("PostTipoEstabelecimento")]
        public async Task<IActionResult> Post(TipoEstabelecimentoVM tipoEstabelecimentoVM)
        {
            await _service.IncluirTipoEstabelecimentoAsync(tipoEstabelecimentoVM);
            return Ok("Tipo de Estabelecimento Cadastrado com Sucesso");
        }

        [HttpPut("PutTipoEstabelecimento")]
        public async Task<IActionResult> Put(TipoEstabelecimentoVM tipoEstabelecimentoVM)
        {
            await _service.AlterarTipoEstabelecimentoAsync(tipoEstabelecimentoVM);
            return Ok("Tipo de Estabelecimento Alterado com Sucesso");
        }

        [HttpDelete("DeleteTipoEstabelecimento/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.oRepositoryTipoEstabelecimento.ExcluirAsync(id);
                return Ok("Tipo de Estabelecimento Excluido(a) com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

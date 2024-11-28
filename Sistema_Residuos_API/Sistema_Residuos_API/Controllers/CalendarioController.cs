﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.ViewModel;

namespace Sistema_Residuos_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalendarioController : ControllerBase
    {
        private Sistema_ResiduosContext _context;
        private ServiceCalendario _service;

        public CalendarioController(Sistema_ResiduosContext context, ServiceCalendario service)
        {
            _context = context;
            _service = service;
        }

        // Qualquer usuário pode visualizar os calendários
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _service.oRepositoryCalendario.SelecionarTodosAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("GetCalendarioById/{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _service.oRepositoryCalendario.SelecionarChaveAsync(id));
        }

        // Somente admin pode criar um novo calendário        
        [HttpPost("PostCalendario")]
        [Authorize(Policy = "admin")]
        public async Task<IActionResult> Post([FromBody] CalendarioVM calendarioVM)
        {
            await _service.IncluirCalendarioAsync(calendarioVM);
            return Ok("Calendário de Coleta Cadastrado com Sucesso");
        }

        // Somente admin pode alterar um calendário
        [HttpPut("PutCalendario")]
        [Authorize(Policy = "admin")]
        public async Task<IActionResult> Put([FromBody] CalendarioVM calendarioVM)
        {
            await _service.AlterarCalendarioAsync(calendarioVM);
            return Ok("Calendário de Coleta Alterado com Sucesso");
        }

        // Somente admin pode excluir um calendário
        [HttpDelete("DeleteCalendario/{id}")]
        [Authorize(Policy = "admin")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.oRepositoryCalendario.ExcluirAsync(id);
                return Ok("Calendário Excluído com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}


//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Sistema_Residuos_MODEL.Models;
//using Sistema_Residuos_MODEL.Services;
//using Sistema_Residuos_MODEL.ViewModel;

//namespace Sistema_Residuos_API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    /*[Authorize("admin")]*/ // Adicione este atributo para proteger o controlador
//    public class CalendarioController : ControllerBase
//    {
//        private Sistema_ResiduosContext _context;
//        private ServiceCalendario _service;

//        public CalendarioController(Sistema_ResiduosContext context, ServiceCalendario service)
//        {
//            _context = context;
//            _service = service;
//        }

//        [HttpGet]
//        public async Task<IActionResult> Get()
//        {
//            try
//            {
//                var result = await _service.oRepositoryCalendario.SelecionarTodosAsync();
//                return Ok(result);
//            }
//            catch (Exception ex)
//            {
//                return StatusCode(500, $"Internal server error: {ex.Message}");
//            }
//        }

//        [HttpGet("GetCalendarioById/{id}")]
//        public async Task<IActionResult> Get(int id)
//        {
//            return Ok(await _service.oRepositoryCalendario.SelecionarChaveAsync(id));
//        }

//        [HttpPost("PostCalendario")]

//        public async Task<IActionResult> Post([FromBody] CalendarioVM calendarioVM)
//        {
//            await _service.IncluirCalendarioAsync(calendarioVM);
//            return Ok("Calendário de Coleta Cadastrado com Sucesso");
//        }

//        [HttpPut("PutCalendario")]

//        public async Task<IActionResult> Put(CalendarioVM calendarioVM)
//        {
//            await _service.AlterarCalendarioAsync(calendarioVM);
//            return Ok("Calendário de Coleta Alterado com Sucesso");
//        }

//        [HttpDelete("DeleteCalendario/{id}")]
//        public async Task<IActionResult> Delete(int id)
//        {
//            try
//            {
//                await _service.oRepositoryCalendario.ExcluirAsync(id);
//                return Ok("Calendário Excluído com sucesso");
//            }
//            catch (Exception ex)
//            {
//                return BadRequest(ex.Message);
//            }
//        }
//    }
//}



//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Sistema_Residuos_MODEL.Models;
//using Sistema_Residuos_MODEL.Services;
//using Sistema_Residuos_MODEL.ViewModel;

//namespace Sistema_Residuos_API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class CalendarioController : ControllerBase
//    {
//        private Sistema_ResiduosContext _context;
//        private ServiceCalendario _service;

//        public CalendarioController(Sistema_ResiduosContext context, ServiceCalendario service)
//        {
//            _context = context;
//            _service = service;
//        }

//        [HttpGet]
//        public async Task<IActionResult> Get()
//        {
//            try
//            {
//                var result = await _service.oRepositoryCalendario.SelecionarTodosAsync();
//                return Ok(result);
//            }
//            catch (Exception ex)
//            {
//                // Logue o erro para diagnósticos futuros
//                return StatusCode(500, $"Internal server error: {ex.Message}");
//            }
//        }

//        //public async Task<IActionResult> Get()
//        //{
//        //    return Ok(await _service.oRepositoryCalendario.SelecionarTodosAsync());
//        //}

//        [HttpGet("GetCalendarioById/{id}")]
//        public async Task<IActionResult> Get(int id)
//        {
//            return Ok(await _service.oRepositoryCalendario.SelecionarChaveAsync(id));
//        }

//        [HttpPost("PostCalendario")]
//        public async Task<IActionResult> Post([FromBody]CalendarioVM calendarioVM)
//        {
//            await _service.IncluirCalendarioAsync(calendarioVM);
//            return Ok("Calendário de Coleta Cadastrado com Sucesso");
//        }

//        [HttpPut("PutCalendario")]
//        public async Task<IActionResult> Put (CalendarioVM calendarioVM)
//        {
//            await _service.AlterarCalendarioAsync(calendarioVM);
//            return Ok("Calendário de Coleta Alterado com Sucesso");
//        }

//        [HttpDelete("DeleteCalendario/{id}")]
//        public async Task<IActionResult> Delete(int id)
//        {
//            try
//            {
//                await _service.oRepositoryCalendario.ExcluirAsync(id);             
//                return Ok("Calendário Excluido(a) com sucesso");
//            }
//            catch (Exception ex)
//            {
//                return BadRequest(ex.Message);
//            }
//        }
//    }
//}

using Microsoft.AspNetCore.Mvc;
using Sistema_Residuos_MODEL.Services;
using Sistema_Residuos_MODEL.Models;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Usuario usuario)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        await _userService.CreateUserAsync(usuario.Nome, usuario.Email, usuario.Senha, usuario.Role);
        return Ok("Usuário criado com sucesso");
    }

    // Novo método GET para obter informações de um usuário específico
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var usuario = await _userService.GetUserByIdAsync(id);
        if (usuario == null)
            return NotFound("Usuário não encontrado");

        return Ok(usuario);
    }

    // Novo método GET para obter uma lista de todos os usuários
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var usuarios = await _userService.GetAllUsersAsync();
        return Ok(usuarios);
    }

    [HttpGet("email/{email}")]
    public async Task<IActionResult> GetByEmail(string email)
    {
        var usuario = await _userService.GetUserByEmailAsync(email);
        if (usuario == null)
            return NotFound("Usuário não encontrado");

        return Ok(usuario);
    }
}

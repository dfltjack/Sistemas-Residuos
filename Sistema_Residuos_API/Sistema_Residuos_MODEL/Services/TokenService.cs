using Sistema_Residuos_MODEL.Models;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Services
{
    public class TokenService
    {
        private readonly Sistema_ResiduosContext _context;

        public TokenService(Sistema_ResiduosContext context)
        {
            _context = context;
        }

        public async Task SaveTokenAsync(string tokenValue)
        {
            var token = new Token
            {
                TokenValue = tokenValue,
                CreatedDate = DateTime.UtcNow
            };

            _context.Tokens.Add(token);
            await _context.SaveChangesAsync();
        }
    }
}

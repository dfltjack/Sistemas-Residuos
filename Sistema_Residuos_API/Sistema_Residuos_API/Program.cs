using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Sistema_Residuos_MODEL.Models;
using Sistema_Residuos_MODEL.Repositories;
using Sistema_Residuos_MODEL.Services;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'Identity_ContextConnection' not found.");

// Add services to the container.
builder.Services.AddDbContext<Sistema_ResiduosContext>(opt => opt.UseSqlServer(connectionString));
builder.Services.AddControllers();

builder.Services.AddScoped<RepositoryCalendario>();
builder.Services.AddScoped<ServiceCalendario>();

builder.Services.AddSwaggerGen(options => {
    options.MapType<TimeOnly>(() => new OpenApiSchema
    {
        Type = "string",
        Format = "Time"
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy.WithOrigins("*")
        .AllowAnyHeader()
        .AllowAnyMethod())
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Use(async (context, next) =>
{
    try
    {
        await next.Invoke();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Erro durante a requisição: {ex.Message}");
        throw; // Re-throw the exception to ensure it gets logged elsewhere
    }
});



app.UseCors();
app.UseAuthorization();
app.MapControllers();

app.Run();

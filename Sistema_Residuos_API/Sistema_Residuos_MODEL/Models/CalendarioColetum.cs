﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace Sistema_Residuos_MODEL.Models;

public partial class CalendarioColetum
{
    public int CalendarioColetaId { get; set; }

    public int? TipoResiduoId { get; set; }

    public TimeOnly Horario { get; set; }

    public string DiaSemana { get; set; }

    public virtual TiposResiduo TipoResiduo { get; set; }
}
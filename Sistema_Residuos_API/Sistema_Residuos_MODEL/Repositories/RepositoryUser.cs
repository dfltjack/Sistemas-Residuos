using Sistema_Residuos_MODEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sistema_Residuos_MODEL.Repositories
{
    internal class RepositoryUser : RepositoryBase<Usuario>
    {
        public RepositoryUser(Sistema_ResiduosContext context, bool saveChanges = true) : base(context, saveChanges)
        {

        }
    }
}

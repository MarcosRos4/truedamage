import './Consulta.scss'
import quianabola from "../images/quiana bola.png";
import faixagiants from "../images/faixa giants.png"
import akalibola from "../images/akali bola.png";
import useAuth from '../login/useAuth.js';
import Login from '../login/Login.js';
import EventoFull from '../components/EventoFull/EventoFull.js'
import { useState } from 'react';
import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const initialData = [
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  },
  {
    "nome": "lapis de cor",
    "espaco": "lapis de cor",
    "endereco": "lapis de cor",
    "cep": "0199999",
    "data": "lapis de cor",
    "horario": "lapis de cor"
  }
]

const Consulta = () => {
    const [data, setData] = useState(initialData);

    const columns = useMemo(() => [
      {
        accessorKey: 'nome', //access nested data with dot notation
        header: 'Nome',
        size: 150,
      },
      {
        accessorKey: 'espaco',
        header: 'Estado',
        size: 150,
      },
      {
        accessorKey: 'endereco', //normal accessorKey
        header: 'Logradouro',
        size: 200,
      },
      {
        accessorKey: 'cep',
        header: 'CEP',
        size: 150,
      },
      {
        accessorKey: 'data',
        header: 'Data',
        size: 150,
      },
      {
        accessorKey: 'horario',
        header: 'Horário',
        size: 150,
      },
    ],
    [],);

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowVirtualization: true,
        enableRowActions: true,
        positionActionsColumn: 'last',
        renderRowActions: ({ row, table }) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          
          <IconButton
            color="secondary"
            onClick={() => {
              table.setEditingRow(row);
            }}
          >
            <Edit/>
          </IconButton>
          <IconButton
            color="error"
            onClick={() => {
              data.splice(row.index, 1); //assuming simple data table
              setData([...data]);
            }}
          >
            <Delete/>
          </IconButton>
        </Box>
      ),

    });

    const {token, setToken} = useAuth()

    if(!token) {
        return <Login setToken={setToken} />
    }
    
    return(<MaterialReactTable className='componente' table={table}/> /*
    <div className="Consulta">
    <img src={akalibola} className="akali" alt="akali bola"></img>
    <img src={quianabola} className="quiana" alt="`quiana bola"></img>
    <img src={faixagiants} className="faixa-giants" alt="faixa giants"></img>
        <div name="wrapper">
                <div className="tabela-eventos-div"> 
                            
                    <button className="evento"><a href="/cadastro">Cadastrar Novo Evento</a></button>
                    <button className="evento"><a href="/">SAIR</a></button>
                </div>
        </div>
        <img src={faixagiants} className="faixa-giants2" alt="faixa giants"></img>
    </div> */
    );
}


export default Consulta



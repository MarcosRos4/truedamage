import './Consulta.scss'
import useAuth from '../login/useAuth.js';
import Login from '../login/Login.js';
import { useState, useEffect } from 'react';
import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { atualizaEventoPorId, deleteEventopId, getAllEventos } from '../fetchs/eventoFetchs.js';


const Consulta = () => {
    const [data, setData] = useState("");
    
    
    const columns = useMemo(() => [
      {
        accessorKey: 'ideventos', //access nested data with dot notation
        header: 'ID',
        size: 100,
      },
      {
        accessorKey: 'nome', //access nested data with dot notation
        header: 'Nome',
        size: 100,
      },
      {
        accessorKey: 'espaco',
        header: 'Estado',
        size: 100,
      },
      {
        accessorKey: 'endereco', //normal accessorKey
        header: 'Logradouro',
        size: 100,
      },
      {
        accessorKey: 'cep',
        header: 'CEP',
        size: 100,
      },
      {
        accessorKey: 'data',
        header: 'Data',
        size: 100,
      },
      {
        accessorKey: 'horario',
        header: 'Horário',
        size: 100,
      },
    ],
    [],);

    // carrega os eventos do BD na tabela através de um fetch
    useEffect(() => { const carregaEventos = async () => {
        try {
          const eventos = await getAllEventos()
          setData(eventos)
        } catch (error) {
          alert(error.message)
        }
      }

      carregaEventos()
      
    }, [])

    const atualizaEvento = async ({ values, table }) => {
      await atualizaEventoPorId(values.ideventos, values)
      table.setEditingRow(null); //exit editing mode
    };

    const deleteEvento = async (index) => {
      await deleteEventopId(data[index].ideventos)
      data.splice(index, 1)
      setData([...data])
    }

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
            onClick={() => deleteEvento(row.index)}
          >
            <Delete/>
          </IconButton>
        </Box>
        ),
        onEditingRowSave: atualizaEvento

    });
    /*
    const {token, setToken} = useAuth()

    if(!token) {
        return <Login setToken={setToken} />
    }*/
    
    return(
     
      <div className="Consulta">
        <MaterialReactTable className='componente' table={table}/>
        <button className="evento"><a href="/cadastro">Cadastrar Novo Evento</a></button>
        <button className="evento"><a href="/">SAIR</a></button> 
      </div>
    );
}


export default Consulta



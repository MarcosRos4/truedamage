import './Consulta.scss'
import useAuth from '../login/useAuth.js';
import Login from '../login/Login.js';
import { useState, useEffect } from 'react';
import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable, MRT_EditActionButtons } from 'material-react-table';
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { atualizaEventoPorId, criarEventoApi, deleteEventopId, getAllEventos } from '../fetchs/eventoFetchs.js';


const Consulta = () => {
    const [data, setData] = useState("");
    const [validationErrors, setValidationErrors] = useState({});
    
    const columns = useMemo(() => [
      {
        accessorKey: 'ideventos', // IDEVENTOS
        header: 'ID',
        enableEditing: false,
        size: 100
      },
      {
        accessorKey: 'nome', // NOME
        header: 'Nome',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.nome,
          helperText: validationErrors?.nome,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              nome: undefined,
            }),
        },
        
        size: 100,
      },
      {
        accessorKey: 'espaco', // ESPAÇO
        header: 'Espaço',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.espaco,
          helperText: validationErrors?.espaco,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              nome: undefined,
            }),
        },
        size: 100,
      },
      {
        accessorKey: 'endereco', // ENDEREÇO
        header: 'Logradouro',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.endereco,
          helperText: validationErrors?.endereco,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              nome: undefined,
            }),
        },
        size: 100,
      },
      {
        accessorKey: 'cep', // CEP
        header: 'CEP',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.cep,
          helperText: validationErrors?.cep,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              nome: undefined,
            }),
        },
        size: 100,
      },
      {
        accessorKey: 'data', // DATA
        header: 'Data',
        required: true,
        size: 100,
        muiEditTextFieldProps: {
          type: 'date',
          required: true,
        },
      },
      {
        accessorKey: 'horario', // HORÁRIO
        header: 'Horário',
        required: true,
        size: 100,
        muiEditTextFieldProps: {
          type: 'time',
          required: true
        },
      },
    ],
    [validationErrors],);

    //FUNÇÃO QUE CARREGA EVENTOS PARA A VARIAVEL DATA
    const carregaEventos = async () => {
      try {
        const eventos = await getAllEventos()
        setData(eventos)
      } catch (error) {
        alert(error.message)
      }
    }
    // carrega os eventos do BD na tabela através de um fetch
    useEffect(() => { carregaEventos() }, [])

    const atualizaEvento = async ({ values, table }) => {
      const newValidationErrors = validateEvento(values);
      if (Object.values(newValidationErrors).some((error) => error)) {
        setValidationErrors(newValidationErrors);
        return;
      }
      setValidationErrors({});
      await atualizaEventoPorId(values.ideventos, values)
      table.setEditingRow(null); //exit editing mode
    };

    const deleteEvento = async (index) => {
      await deleteEventopId(data[index].ideventos)
      data.splice(index, 1)
      setData([...data])
    }

    const criarEvento = async ({ values, table }) => {
      const newValidationErrors = validateEvento(values);
      if (Object.values(newValidationErrors).some((error) => error)) {
        setValidationErrors(newValidationErrors);
        return;
      }
      setValidationErrors({});
      await criarEventoApi(values);
      carregaEventos()
      table.setCreatingRow(null); //exit creating mode
    };

    const table = useMaterialReactTable({
      columns,
      data,
      enableStickyFooter:true,
      enableRowVirtualization: true,
      enableColumnVirtualization: true,
      enableRowActions: true,
      positionActionsColumn: 'last',
      onCreatingRowCancel: () => setValidationErrors({}),
      onCreatingRowSave: criarEvento,
      onEditingRowSave: atualizaEvento,
      onEditingRowCancel: () => setValidationErrors({}),
      // renderizar a coluna de editar e excluir
      renderRowActions: ({ row, table }) => (
          <Box sx={{ display: 'flex', flexDirection:'column', flexWrap: 'nowrap', gap: '8px' }}>

            <IconButton color="secondary" onClick={() => { table.setEditingRow(row) }}>
              <Edit/>
            </IconButton>
            <IconButton color="error" onClick={() => deleteEvento(row.index)}>
              <Delete/>
            </IconButton>
          </Box>
      ),
      // renderizar tabela de edição de envento
      renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
          <>
            <DialogTitle variant="h3">Editar Evento</DialogTitle>
            <DialogContent
              sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {internalEditComponents} {/* or render custom edit components here */}
            </DialogContent>
            <DialogActions>
              <MRT_EditActionButtons variant="text" table={table} row={row}/>
            </DialogActions>
          </>
      ),
      // botão de criar novo evento
      renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
          <>
            <DialogTitle variant="h3">Criar Novo Evento</DialogTitle>
            <DialogContent
              sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {internalEditComponents} {/* or render custom edit components here */}
            </DialogContent>
            <DialogActions>
              <MRT_EditActionButtons variant="text" table={table} row={row} />
            </DialogActions>
          </>
      ),
      // rederizar toolbar que contém o botão
      renderTopToolbarCustomActions: ({ table }) => (
          <Button
            variant="contained"
            onClick={() => {
              table.setCreatingRow(true); //simplest way to open the create row modal with no default values
              //or you can pass in a row object to set default values with the `createRow` helper function
              // table.setCreatingRow(
              //   createRow(table, {
              //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
              //   }),
              // );
            }}
          >
            Criar Novo Evento
          </Button>
      ),
    });
    /*
    const {token, setToken} = useAuth()

    if(!token) {
        return <Login setToken={setToken} />
    }*/
    
    return(
      <div className="Consulta">
        <MaterialReactTable  table={table}/> 
      </div>
    );
}

export default Consulta

const validateRequired = (value) => !!value.length;

function validateEvento(evento) {
  return {
    nome: !validateRequired(evento.nome) ? 'Nome é Obrigatório' : '',
    espaco: !validateRequired(evento.espaco) ? 'Espaço é Obrigatório' : '',
    endereco: !validateRequired(evento.endereco) ? 'Logradouro é Obrigatório' : '',
    cep: !validarCEP(evento.cep) ? 'CEP está Inválido' : '',
  };
}

function validarCEP(cep) {
  // Remover caracteres não numéricos
  cep = cep.replace(/[^\d]/g, '');
  // Verificar se o CEP tem 8 dígitos
  if (cep.length !== 8) {
    return false;
  }
  // O CEP é considerado válido
  return true;
}
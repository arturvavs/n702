import Parse from "parse/dist/parse.min.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableSortLabel,
  Paper,
  Input,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";

export const UserPager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof (typeof pets)[0]>("nomePet");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [pets, setPets] = useState<any[]>([]);
  const [selectedPets, setSelectedPets] = useState<string[]>([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentPet, setCurrentPet] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsList = await getPetsByUser();
        setPets(petsList);
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
      }
    };

    fetchPets();
  }, []);

  {
    /*Função que executa a Query no servidor do Back4App para obter os registros do usuário logado */
  }
  const getPetsByUser = async () => {
    const currentUser = Parse.User.current();

    if (!currentUser) {
      throw new Error("Usuário não autenticado!");
    }

    const Pet = Parse.Object.extend("Pet");
    const query = new Parse.Query(Pet);

    query.equalTo("userObjectId", currentUser); //Faz a consulta através do userObjectId criado no Back4App como relacionamento entre tabelas 1:N, onde da tabela Pet possui o atributo userObjectId que refere-se ao userObjectId da tabela _User

    {
      /*Armazenamento da consulta nos atributos para exposição na tabela*/
    }
    try {
      const results = await query.find();
      return results.map((pet) => ({
        id: pet.id,
        nomePet: pet.get("nomePet") || "",
        idadePet: pet.get("idadePet") || "",
        escpeciePet: pet.get("escpeciePet") || "",
        racaPet: pet.get("racaPet") || "",
        pesoPet: pet.get("pesoPet") || "",
        dataNascimentoPet: pet.get("dataNascimentoPet") || "",
        sexoPet: pet.get("sexoPet") || "",
      }));
    } catch (err) {
      alert(`Erro ao buscar pets:`);
    }
  };
  const handleSelectPet = (petId: string) => {
    // Verifica se o pet já está selecionado
    if (selectedPets.includes(petId)) {
      // Se já estiver, remove da lista
      setSelectedPets((prev) => prev.filter((id) => id !== petId));
      console.log('pet removido: ',petId)
    } else {
      // Caso contrário, adiciona à lista
      setSelectedPets((prev) => [...prev, petId]);
      console.log('pet adicionado: ',petId)
    }
  };
  const deleteSelectedPets = async () => {

    if (selectedPets.length === 0) {
      alert("Por favor, selecione pelo menos um pet para deletar.");
      return;
    }

    try {
      const Pet = Parse.Object.extend("Pet");
      const query = new Parse.Query(Pet);
  
      // Deletar os pets selecionados
      const petsToDelete = selectedPets.map((petId) => {
        const pet = new Pet();
        pet.set("objectId", petId); // Define o ID do pet a ser deletado
        return pet;
      });
      
      await Parse.Object.destroyAll(petsToDelete);
      alert("Pets deletados com sucesso!");
  
      // Atualiza a lista de pets removendo os deletados
      setPets((prevPets) => prevPets.filter((pet) => !selectedPets.includes(pet.id)));
  
      // Limpa a seleção
      setSelectedPets([]);
    } catch (error) {
      console.error("Erro ao deletar pets:", error);
      alert("Erro ao deletar pets.");
    }
  };
  {
    /*Filtra os registros considerando alguns atributos, a partir da digitação com tratativa para converter a string para LowerCase */
  }
  const filteredPets = pets.filter(
    (pet) =>
      pet.nomePet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.escpeciePet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.racaPet.toLowerCase().includes(searchTerm.toLowerCase())
  );

  {
    /*Lógica já disponibilizada pela MUI5, apenas ajustado para contemplar as demais 'variáveis' do compnente UserPage.tsx */
  }
  const sortedPets = filteredPets.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  {
    /*Lógica já disponibilizada pela MUI5, apenas ajustado para contemplar as demais 'variáveis' do compnente UserPage.tsx */
  }
  const handleSort = (column: keyof (typeof pets)[0]) => {
    const isAsc = sortColumn === column && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortColumn(column);
  };

  const handleLogout = async (e: React.FormEvent) => {
    Parse.User.logOut();
    navigate("/");
  };

  const handleEditPet = (pet: any) => {
    setCurrentPet(pet);
    setOpenEditModal(true); // Abrir o modal de edição
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPet({ ...currentPet, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async () => {
    try {
      const Pet = Parse.Object.extend("Pet");
      const query = new Parse.Query(Pet);
      const petToUpdate = await query.get(currentPet.id);

      petToUpdate.set("nomePet", currentPet.nomePet);
      petToUpdate.set("idadePet", currentPet.idadePet);
      petToUpdate.set("escpeciePet", currentPet.escpeciePet);
      petToUpdate.set("racaPet", currentPet.racaPet);
      petToUpdate.set("pesoPet", parseFloat(currentPet.pesoPet));
      petToUpdate.set("sexoPet", currentPet.sexoPet);

      await petToUpdate.save();

      // Atualiza o estado dos pets
      setPets((prevPets) =>
        prevPets.map((pet) => (pet.id === currentPet.id ? currentPet : pet))
      );

      setOpenEditModal(false);
      alert("Pet atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar pet:", error);
      alert("Erro ao editar pet.");
    }
  };

  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Menu
              </Typography>
              <Button color="inherit" onClick={handleLogout} href="/">
                Sair
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h4" component="h1">
            Pets Registrados
          </Typography>
        </div>
        <div className="flex items-center justify-between mb-6">
          <Button href="/cadastroPet" variant="contained" color="primary">
            Registrar Pet
          </Button>
          <Button variant="contained" color="error" onClick={deleteSelectedPets}>
            Deletar Pet
          </Button>
        </div>
        <TableContainer component={Paper}>
          <div className="p-4">
            <Input
              placeholder="Localizar pet"
              value={searchTerm}
              onChange={handleSearch}
              fullWidth
            />
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    inputProps={{
                      "aria-label": "Selecionar tudo",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "nomePet"}
                    direction={sortColumn === "nomePet" ? sortDirection : "asc"}
                    onClick={() => handleSort("nomePet")}
                  >
                    Nome
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "escpeciePet"}
                    direction={
                      sortColumn === "escpeciePet" ? sortDirection : "asc"
                    }
                    onClick={() => handleSort("escpeciePet")}
                  >
                    Espécie
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "racaPet"}
                    direction={sortColumn === "racaPet" ? sortDirection : "asc"}
                    onClick={() => handleSort("racaPet")}
                  >
                    Raça
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "pesoPet"}
                    direction={sortColumn === "pesoPet" ? sortDirection : "asc"}
                    onClick={() => handleSort("pesoPet")}
                  >
                    Peso
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={sortColumn === "dataNascimentoPet"}
                    direction={
                      sortColumn === "dataNascimentoPet" ? sortDirection : "asc"
                    }
                    onClick={() => handleSort("dataNascimentoPet")}
                  >
                    Data de Nascimento
                  </TableSortLabel>
                </TableCell>
                <TableCell>Sexo</TableCell>
                <TableCell>Opções</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedPets.length > 0 ? (
                sortedPets.map((pet) => (
                  <TableRow key={pet.id}>
                    <TableCell padding="checkbox"> <Checkbox color="primary"  checked={selectedPets.includes(pet.id)} onChange={() => handleSelectPet(pet.id)}/> </TableCell>
                    <TableCell>{pet.nomePet}</TableCell>
                    <TableCell>{pet.escpeciePet}</TableCell>
                    <TableCell>{pet.racaPet}</TableCell>
                    <TableCell>{pet.pesoPet}</TableCell>
                    <TableCell>
                    {new Date(pet.dataNascimentoPet).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{pet.sexoPet}</TableCell>
                    <TableCell>
                    <IconButton onClick={() => handleEditPet(pet)}>
                      <EditIcon />
                    </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Nenhum pet encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Editar Pet</DialogTitle>
        <DialogContent>
          <DialogContentText>Altere as características do pet abaixo.</DialogContentText>
          <TextField margin="dense" label="Nome" name="nomePet" value={currentPet?.nomePet} onChange={handleEditChange} fullWidth />
          <TextField margin="dense" label="Espécie" name="escpeciePet" value={currentPet?.escpeciePet} onChange={handleEditChange} fullWidth />
          <TextField margin="dense" label="Raça" name="racaPet" value={currentPet?.racaPet} onChange={handleEditChange} fullWidth />
          <TextField margin="dense" label="Peso" name="pesoPet" value={currentPet?.pesoPet} onChange={handleEditChange} fullWidth />
          <TextField margin="dense" label="Sexo" name="sexoPet" value={currentPet?.sexoPet} onChange={handleEditChange} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)} color="primary">Cancelar</Button>
          <Button onClick={handleEditSubmit} color="primary">Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

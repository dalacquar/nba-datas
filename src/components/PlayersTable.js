import React, { useState, useEffect } from "react";
import {
  getAllPlayers,
  getPlayersByTeam,
} from "../services/players/Players.ts";
import { getAllTeams } from "../services/teams/Teams.ts";
import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  TableCaption,
  TableContainer,
  Select, // Adicionando o componente Select do Chakra UI
} from "@chakra-ui/react";

function PlayersTable() {
  // Estado para armazenar os jogadores
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [playersResponse, teamsResponse] = await Promise.all([
          getAllPlayers(),
          getAllTeams(),
        ]);

        if (playersResponse.status === "success") {
          setPlayers(playersResponse.data.data);
        } else {
          console.error(playersResponse.message);
        }

        if (teamsResponse.status === "success") {
          setTeams(teamsResponse.data.data);
        } else {
          console.error(teamsResponse.message);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("entrando");
    const fetchPlayersByTeam = async () => {
      if (selectedTeam) {
        try {
          const playersByTeamResponse = await getPlayersByTeam(selectedTeam);

          if (playersByTeamResponse.status === "success") {
            console.log(playersByTeamResponse.data.data);
            setPlayers(playersByTeamResponse.data.data);
          } else {
            console.error(playersByTeamResponse.message);
          }
        } catch (error) {
          console.error("Erro ao buscar jogadores por time:", error);
        }
      }
    };

    fetchPlayersByTeam();
  }, [selectedTeam]);

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  return (
    <Box>
      <Select
        placeholder="Selecione um time"
        onChange={handleTeamChange}
        mb="4"
      >
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.full_name}
          </option>
        ))}
      </Select>

      <TableContainer pt="20px">
        <Table variant="striped" colorScheme="red">
          <TableCaption>Tabela de jogadores</TableCaption>
          <Thead>
            <Tr>
              <Th>Index</Th>
              <Th>Nome</Th>
              <Th>Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {players.map((player, index) => (
              <Tr key={player.id}>
                <Td>{index + 1}</Td>
                <Td>
                  {player.first_name} {player.last_name}
                </Td>
                <Td>{player.team.full_name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PlayersTable;

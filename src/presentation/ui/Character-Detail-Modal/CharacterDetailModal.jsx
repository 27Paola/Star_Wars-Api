import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useGetCharacterById } from "../../../data/services/ServicesCharacters";
import { Chip } from "@mui/material";
import { MdFace2 } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import "./CharacterDetailModal.css"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "500px",
  overflow: "hidden scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CharacterDetailModal = ({ open, handleClose, id }) => {
  const { loading, error, data } = useGetCharacterById({
    variables: { id: id },
  });
  if (loading) return <Typography>Loading...</Typography>;
  if (error)
    return <Typography>Error loading data: {error.message}</Typography>;
    const character = data.person;
    
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="character-detail-modal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data?.name}
          </Typography>
          <Box
            title="Data Character"
            sx={{
              mt: "2",
            }}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Datos del personaje
            </Typography>
            <Chip
              color="secondary"
              icon={<MdFace2 />}
              label={`Altura: ${character.height}`}
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              color="secondary"
              icon={<MdFace2 />}
              label={`Peso: ${character.mass}`}
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              color="secondary"
              icon={<MdFace2 />}
              label={`Cumpleaños: ${character.birthYear}`}
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              color="secondary"
              icon={<MdFace2 />}
              label={`ojos: ${character.eyeColor}`}
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              color="secondary"
              icon={<MdFace2 />}
              label={`Genero: ${character.gender}`}
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              color="secondary"
              icon={<MdFace2 />}
              label={`cabello: ${character.hairColor}`}
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              color="secondary"
              icon={<MdFace2 />}
              label={`Color de piel: ${character.skinColor}`}
              sx={{ mr: 1, mb: 1 }}
            />
            <Chip
              color="secondary"
              icon={<MdFace2 />}
              label={`origen: ${character.homeworld.name}`}
              sx={{ mr: 1, mb: 1 }}
            />

            <hr />
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Peliculas Relacionadas
            </Typography>
            {data?.person?.filmConnection?.edges?.map((edge) => {
              return (
                <>
                  <Chip
                    color="info"
                    icon={<BiCameraMovie />}
                    label={`Titulo: ${edge?.node?.title}`}
                    sx={{ mr: 1, mb: 1 }}
                  />
                  <Chip
                    color="success"
                    icon={<BiCameraMovie />}
                    label={`Director: ${edge?.node?.director}`}
                    sx={{ mr: 1, mb: 1 }}
                  />
                  <Chip
                    color="warning"
                    icon={<BiCameraMovie />}
                    label={`lanzamiento: ${edge?.node?.releaseDate}`}
                    sx={{ mr: 1, mb: 1 }}
                  />

                  {edge?.planetConnection?.edges.map(({ node }) => {
                    return (
                      <>
                        <Chip
                          color="secondary"
                          icon={<BiCameraMovie />}
                          label={` Planeta:${node.name}`}
                          sx={{ mr: 1, mb: 1 }}
                        />
                      </>
                    );
                  })}
                  <hr />
                </>
              );
            })}
            {/* Puedes agregar más chips para los detalles de las películas si lo deseas */}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CharacterDetailModal;

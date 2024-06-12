import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { GiArrowed } from "react-icons/gi";
import "./ListStarWars.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CharacterDetailModal from"../../ui/Character-Detail-Modal/CharacterDetailModal";

const ListStarWars = ({ graphQLData }) => {
  const [open, setOpen] = React.useState(false);
  const [dataId, setDataId] = React.useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleOpen = (id) => {
    setOpen(true);
    setDataId(id);
    navigate(`/${id}`);
  };
  const handleClose = () => {
    setOpen(false);
    navigate(`/`);
  };

  useEffect(() => {
    if (id) {
      handleOpen(id);
    }
  }, []);
  return (
    <div className="List-contend">
      <List
        sx={{
          width: "100%",
          maxWidth: "auto",
          position: "relative",
          overflow: "auto",
          maxHeight: 500,
        }}
        subheader={<li />}
      >
        {graphQLData?.allPeople?.edges.map(({ node }) => {
          return (
            <>
              <ListItem alignItems="flex-start" key={node.id} className="Card">
                <ListItemAvatar>
                  <Avatar
                    alt="Logo"
                    src="https://s3-alpha-sig.figma.com/img/1661/c921/4c5f97f58f51ac20bace8d78b12d228c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hodIp8PYN04infZ9XlutBNzXU7GTSV0-1bMwxnB7tmTqzbDoxl8N9--950Skq57QTIBbQcLF9NUHstodSSzJ3rwOu43p31qbpfUwjwApmtxI7XvKA2tsoknNLt2hbJ5br~O8pMyD9fhcqYHyno~Hk-2YEytpIyqPyRu7229TighBvltlLLGYW97zicvGSA~3s-CTsledfzcBf1rodefG7Tmsg~lKc8ClITlHP38Jc1p4KifN4-srCXGAyr2tzrbyoiSPMpc56adRgJpUlPD6ZzzYjkA94cbhOkMFUwuKH8twP13~ksFwOwNYrtZrP9NTjsKZdDlcM4DDcpFRwO7ZSg__"
                  />
                </ListItemAvatar>
                <ListItemText
                  className="text"
                  primary={node.name}
                  style={{ marginTop: "1.2rem" }}
                />
                <GiArrowed
                  className="Icon"
                  onClick={() => {
                    handleOpen(node?.id);
                  }}
                />
              </ListItem>
            </>
          );
        })}
        <CharacterDetailModal
          open={open}
          handleClose={handleClose}
          id={dataId}
        />
      </List>
    </div>
  );
};

export default ListStarWars;

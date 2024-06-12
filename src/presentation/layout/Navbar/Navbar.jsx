import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { Avatar } from '@mui/material';


function ResponsiveAppBar() {

  return (
    <AppBar class="header" position="static" color={"transparent"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Avatar
                alt="Logo"
                src="https://s3-alpha-sig.figma.com/img/1661/c921/4c5f97f58f51ac20bace8d78b12d228c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hodIp8PYN04infZ9XlutBNzXU7GTSV0-1bMwxnB7tmTqzbDoxl8N9--950Skq57QTIBbQcLF9NUHstodSSzJ3rwOu43p31qbpfUwjwApmtxI7XvKA2tsoknNLt2hbJ5br~O8pMyD9fhcqYHyno~Hk-2YEytpIyqPyRu7229TighBvltlLLGYW97zicvGSA~3s-CTsledfzcBf1rodefG7Tmsg~lKc8ClITlHP38Jc1p4KifN4-srCXGAyr2tzrbyoiSPMpc56adRgJpUlPD6ZzzYjkA94cbhOkMFUwuKH8twP13~ksFwOwNYrtZrP9NTjsKZdDlcM4DDcpFRwO7ZSg__"
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

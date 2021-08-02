import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";
const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleClickOpen} variant="contained">
                Contact Info
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Contact</DialogTitle>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <DialogContent>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <span role="img" aria-label="mail emoji">
                                        📧
                                    </span>{" "}
                                    Email (Preferred) ➜ pdsmiley2@gmail.com
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText>
                                    <span role="img" aria-label="phone emoji">
                                        📱
                                    </span>{" "}
                                    Phone Number ➜ 845-598-2123
                                </ListItemText>
                            </ListItem>
                        </List>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default Contact;

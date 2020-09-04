import React, { useState } from "react";
import { Typography, Grid, Paper, TextField, Button, Dialog, DialogContent } from "@material-ui/core";

function AddUser() {
  const [open, setOpen] = useState(false);

  return (
    <Grid item sm={6}>
      <Paper>
        <div style={{ padding: "15px" }}>
          <Typography variant="caption" style={{ float: "flex-end" }}>
            <Button onClick={() => setOpen(true)}>
              + ADD USER
            </Button>
            <Grid item >
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogContent style={{width: "25rem"}}>

              <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography variant="body1">New User</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-size-small"
                      label="User Name"
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-size-small"
                      label="User Role"
                      fullWidth
                      multiline
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-size-small"
                      label="Mobile Number"
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-size-small"
                      label="Department Name"
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} container spacing={2} justify="flex-end">
                    <Grid item>
                      <Button
                        variant="contained"
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                      >
                        submit
                      </Button>
                    </Grid>
                  </Grid>
              </Grid>
              </DialogContent>
            </Dialog>
            </Grid>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
}

export default AddUser;

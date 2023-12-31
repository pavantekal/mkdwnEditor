import React, { useState } from "react";
import { Typography, TextField, Box } from "@mui/material";
import { convertMkdwnDataCall } from "../data/convertmkdwn";
import debounce from 'lodash.debounce'


export default function MarkDown() {
  const handleConvertMarkDown = debounce((markdownData) => {
    convertMkdwnDataCall(markdownData).then((response) =>
      setResultField(response?.result)
    );
  },500);

  const [resultField, setResultField] = useState("");
  return (
    <div style={style.root}>
      <Typography style={style.heading}>Real-time Markdown Editor</Typography>
      <Box sx={style.textFieldContainer}>
        <TextField
          maxRows={1}
          sx={style.inputTextEditor}
          multiline
          fullWidth
          inputProps={{
            style: {
              height: 600,
            },
          }}
          onChange={(e) =>
            handleConvertMarkDown(e.target.value)
          }
        />
        <Typography
          sx={style.outputTextEditor}
          dangerouslySetInnerHTML={{ __html: resultField }}
        />
      </Box>
    </div>
  );
}

const style = {
  heading: {
    color: "black",
    textAlign: "center",
    paddingTop: 50,
    fontSize: 26,
    fontWeight: 500,
  },
  textFieldContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    m: 5,
  },
  inputTextEditor: {
    m: 4,
    flexBasis: "50%",
  },
  outputTextEditor: {
    m: 4,
    height: 630,
    overflow: "auto",
    flexBasis: "50%",
    borderRadius: 1,
    border: "1px solid rgba(0, 0, 0, .3)",
  },
};

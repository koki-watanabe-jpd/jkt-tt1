import * as React from 'react';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { theme } from './index.js';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SpeedDial from '@mui/material/SpeedDial';

import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import ExpandIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/FileDownload';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import ja from 'date-fns/locale/ja';

export default function ContainedButtons() {
  const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
    zIndex: 999,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* アプリケーションヘッダー */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              運転事故等統計システム
            </Typography>
            <Box
              sx={{
                flexGrow: 0,
                display: { sm: 'none', md: 'flex' },
                mr: 8,
                justifyContent: 'space-evenly',
              }}
            >
              <Button color="inherit" endIcon={<ExpandIcon />}>
                新規作成
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>首都圏本部_東京駅</MenuItem>
                <MenuItem onClick={handleClose}>首都圏本部_中野駅</MenuItem>
                <MenuItem onClick={handleClose}>首都圏本部_現場管理者</MenuItem>
                {/* <MenuItem onClick={handleClose}>
                  運転事故情報記入シート
                  <DownloadIcon />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  傷害事故情報記入シート
                  <DownloadIcon />
                </MenuItem> */}
              </Menu>
              <Button color="inherit">検索</Button>
              <Button color="inherit" endIcon={<ExpandIcon />}>
                出力
              </Button>
              <Button color="inherit">グループ一覧</Button>
            </Box>
            <Box
              sx={{ flexGrow: 0, display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                color="inherit"
                endIcon={<ExpandIcon />}
                // onClick={handleClick}
              >
                ログイン：首都圏本部_東京駅
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* ページヘッダー */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="default" sx={{ top: 46 }}>
          <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              運転事故詳細画面
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              endIcon={<EditIcon />}
            >
              編集
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <Box sx={{ mt: 10 }}></Box>

      {/* 保存ボタン */}
      <Fab
        size="medium"
        variant="extended"
        color="secondary"
        style={fabStyle}
        onClick={handleClick}
        // disabled
      >
        保存
        <SaveIcon sx={{ ml: 1 }} />
      </Fab>

      {/* <SpeedDial></SpeedDial> */}

      {/* 各種ボタンテスト */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<EditIcon />}>
          編集
        </Button>
        <Button variant="contained" disabled>
          決定
        </Button>
        <Button variant="outlined">決定</Button>
      </Stack>
      {/* 
      <br />
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <Tooltip title="○○を削除する" arrow>
        <IconButton color="error" aria-label="add an alarm">
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <br /> */}
      {/* <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" size="small" variant="outlined" />
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          disabled
        />
      </Box> */}

      <br />
      <br />
      {/* <LocalizationProvider dateAdapter={AdapterDateFns} locale={ja}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      {/* 入力項目グリッド表示テスト */}
      <Typography variant="h6">セクション名</Typography>
      <Divider></Divider>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1" color="error">
            項目名
          </Typography>
          <Select fullWidth error size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">項目名</Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            id="outlined-basic"
            size="small"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ mt: 4 }}>
        セクション名
      </Typography>
      <Divider></Divider>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={6} md={4} lg={3}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="subtitle1">項目名</Typography>
            <Typography
              variant="body"
              sx={{ color: theme.palette.secondary.main }}
            >
              *
            </Typography>
            <Typography
              color="white"
              variant="caption"
              sx={{
                backgroundColor: theme.palette.secondary.light,
                px: 1,
                ml: 1,
                height: 1,
                borderRadius: 1,
              }}
            >
              必須
            </Typography>
          </Box>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="subtitle1">項目名</Typography>
            <Typography
              color="white"
              variant="caption"
              sx={{
                backgroundColor: theme.palette.info.main,
                px: 1,
                ml: 1,
                height: 1,
                borderRadius: 1,
              }}
            >
              推奨
            </Typography>
          </Box>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <Typography variant="subtitle1">項目名</Typography>
          <Select fullWidth size="small"></Select>
        </Grid>
      </Grid>
    </>
  );
}

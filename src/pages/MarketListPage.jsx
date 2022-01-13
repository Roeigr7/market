import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import DialogBox from '../components/DialogBox';
import Filters from '../components/Filters';

const MarketListPage = () => {
  const [marketList, setMarketList] = useState([]);
  const [error, setError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [checked, setChecked] = useState(new Array(5).fill(true));

  useEffect(() => {
    const fetchMarketList = () => {
      fetch(
        'https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'ZeKbpkwZgY3CkuxYHevXL1YH14JSAkev6yA5Tbq7',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setMarketList(data.marketSummaryResponse.result);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    fetchMarketList();
  }, []);
  const handleOpenDialog = (idx) => {
    setSelectedItem(marketList[idx]);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedItem(false);
  };

  if(error) return <Grid container justifyContent="center" pt={5}><Typography variant="h3">{error}</Typography></Grid>

  return (
    <Grid container justifyContent='center'>
      <Grid pt={3} item>
        <Filters checked={checked} setChecked={setChecked} />
      </Grid>
      <Grid
        container
        justifyContent='start'
        alignItems='stretch'
        spacing={2}
        py={5}
        px={2}
      >
        {marketList.map((item, idx) => (
          <Grid container key={idx} item sm={6} lg={3}>
            <Grid
              textAlign='center'
              container
              sx={{ backgroundColor: '#f4f4f4' }}
            >
              <Grid item py={1} xs={12}>
                <Typography sx={{fontWeight:'600'}} variant='h5' component='div'>
                  {item.shortName} 
                </Typography>
                <Typography variant='cardBody' component='span'>
                  <span>{item.symbol}</span>
                </Typography>
              </Grid>
              {checked[0] && (
                <Grid
                  item
                  py={1}
                  xs={6}
                  sx={{ borderBottom: '2px solid white' }}
                >
                  <Typography component={'p'} variant='cardTitle'>
                  Regular Market change
                  </Typography>
                  <Typography component={'p'} variant='cardBody'>
                  <span style={{fontWeight:'800'}}>fmt:</span> {item.regularMarketChange.fmt} <br/> <span style={{fontWeight:'800'}}>raw:</span> {item.regularMarketChange.raw} 
                  </Typography>
                </Grid>
              )}
              {checked[1] && (
                <Grid
                  item
                  py={1}
                  xs={6}
                  sx={{
                    borderLeft: '2px solid white',
                    borderBottom: '2px solid white',
                  }}
                >
                  <Typography component={'p'} variant='cardTitle'>
                  Regular change Percent
                  </Typography>
                  <Typography component={'p'} variant='cardBody'>
                  <span style={{fontWeight:'800'}}>fmt:</span> {item.regularMarketChangePercent.fmt} <br/><span style={{fontWeight:'800'}}>raw:</span> {item.regularMarketChangePercent.raw} 
                  </Typography>
                </Grid>
              )}
              {checked[2] && (
                <Grid
                  item
                  py={1}
                  xs={6}
                  sx={{ borderBottom: '2px solid white' }}
                >
                  <Typography component={'p'} variant='cardTitle'>
                 Regular Market Price
                  </Typography>
                  <Typography component={'p'} variant='cardBody'>
                    <span style={{fontWeight:'800'}}>fmt:</span> {item.regularMarketPrice.fmt} <br/> <span style={{fontWeight:'800'}}>raw:</span> {item.regularMarketPrice.raw} 
                  </Typography>
                </Grid>
              )}
              {checked[3] && (
                <Grid
                  item
                  py={1}
                  xs={6}
                  sx={{
                    borderLeft: '2px solid white',
                    borderBottom: '2px solid white',
                  }}
                >
                  <Typography component={'p'} variant='cardTitle'>
                    Regular Previous Close
                  </Typography>
                  <Typography component={'p'} variant='cardBody'>
                  <span style={{fontWeight:'800'}}>fmt:</span> {item.regularMarketPreviousClose.fmt} <br/><span style={{fontWeight:'800'}}>raw:</span> {item.regularMarketPreviousClose.raw} 
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} sx={{ backgroundColor: '#eaeaea' }}>
                <Button
                  fullWidth
                  size='large'
                  onClick={() => handleOpenDialog(idx)}
                >
                  See More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <DialogBox
        item={selectedItem}
        open={dialogOpen}
        onClose={handleCloseDialog}
      />
    </Grid>
  );
};

export default MarketListPage;
